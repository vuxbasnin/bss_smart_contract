// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract EyeMarketplace is Ownable, IERC721Receiver {
    using SafeERC20 for IERC20;
    IERC721Enumerable private nft;
    IERC20 private token;

    struct ListDetail {
        address payable author;
        uint256 price;
        uint256 tokenId;
    }

    event ListNFT(address indexed _from, uint256 _tokenId, uint256 _price);
    event UnListNFT(address indexed _from, uint256 _tokenId);
    event BuyNFT(address _from, uint256 _tokenId, uint256 _price);
    event UpdateListingNFTPrice(uint256 _tokenId, uint256 _price);
    event SetNFT(IERC721Enumerable _nft);
    event SetToken(IERC20 _token);
    event SetTax(uint256 _tax);

    uint256 private tax = 10; //percent
    mapping(uint256 => ListDetail) listDetail;

    constructor(IERC20 _token, IERC721Enumerable _nft) Ownable(_msgSender()) {
        token = _token;
        nft = _nft;
    }

    //modifier
    modifier isOwnerTokenId(uint256 _tokenId) {
        require(
            nft.ownerOf(_tokenId) == msg.sender,
            "You are not the owner of this NFT"
        );
        _;
    }

    modifier isApprovedTokenId(uint256 _tokenId) {
        require(
            nft.getApproved(_tokenId) == address(this),
            "Marketplace is not approved to transfer this NFT"
        );
        _;
    }

    modifier isListingNFT(uint256 _tokenId) {
        require(
            nft.ownerOf(_tokenId) == address(this),
            "This NFT not exist on marketplace"
        );
        _;
    }

    modifier isOwnerNFT(uint256 _tokenId) {
        require(
            listDetail[_tokenId].author == msg.sender,
            "Only owner can handle this NFT"
        );
        _;
    }

    modifier checkBalanceSender(uint256 _price) {
        require(
            token.balanceOf(msg.sender) >= _price,
            "Insufficient account balance of sender"
        );
        _;
    }

    modifier checkMinPrice(uint256 _tokenId, uint256 _price) {
        require(
            listDetail[_tokenId].price <= _price,
            "Minimum price has not been reached"
        );
        _;
    }

    modifier checkBalanceContract(uint256 _amount) {
        require(
            token.balanceOf(address(this)) >= _amount,
            "Insufficient account balance of contract"
        );
        _;
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return
            bytes4(
                keccak256("onERC721Received(address,address,uint256,bytes)")
            );
    }

    //function can call by owner
    function setTax(uint256 _tax) public onlyOwner {
        tax = _tax;
        emit SetTax(_tax);
    }

    function setToken(IERC20 _token) public onlyOwner {
        token = _token;
        emit SetToken(_token);
    }

    function setNFT(IERC721Enumerable _nft) public onlyOwner {
        nft = _nft;
        emit SetNFT(_nft);
    }

    function getListedNFT() public view returns (ListDetail[] memory) {
        uint balance = nft.balanceOf(address(this));
        ListDetail[] memory myNFT = new ListDetail[](balance);

        for (uint i = 0; i < balance; i++) {
            myNFT[i] = listDetail[nft.tokenOfOwnerByIndex(address(this), i)];
        }

        return myNFT;
    }

    function listNFT(
        uint256 _tokenId,
        uint256 _price
    ) public isOwnerTokenId(_tokenId) isApprovedTokenId(_tokenId) {
        listDetail[_tokenId] = ListDetail(
            payable(msg.sender),
            _price,
            _tokenId
        );
        nft.safeTransferFrom(msg.sender, address(this), _tokenId);
        emit ListNFT(msg.sender, _tokenId, _price);
    }

    function updateListingNFTPrice(
        uint256 _tokenId,
        uint256 _price
    ) public isListingNFT(_tokenId) isOwnerNFT(_tokenId) {
        listDetail[_tokenId].price = _price;
        emit UpdateListingNFTPrice(_tokenId, _price);
    }

    function unListNFT(
        uint256 _tokenId
    ) public isListingNFT(_tokenId) isOwnerNFT(_tokenId) {
        nft.safeTransferFrom(address(this), msg.sender, _tokenId);
        emit UnListNFT(msg.sender, _tokenId);
    }

    function buyNFT(
        uint256 _tokenId,
        uint256 _price
    )
        public
        checkBalanceSender(_price)
        isListingNFT(_tokenId)
        checkMinPrice(_tokenId, _price)
    {
        SafeERC20.safeTransferFrom(token, msg.sender, address(this), _price);
        token.transfer(
            listDetail[_tokenId].author,
            (_price * (100 - tax)) / 100
        );
        nft.safeTransferFrom(address(this), msg.sender, _tokenId);
        emit BuyNFT(msg.sender, _tokenId, _price);
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawToken(
        uint256 _amount
    ) public onlyOwner checkBalanceContract(_amount) {
        token.transfer(msg.sender, _amount);
    }

    function withdrawErc20() public onlyOwner {
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }
}