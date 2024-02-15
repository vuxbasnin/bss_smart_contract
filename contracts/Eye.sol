// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Eye is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    ERC721Burnable,
    AccessControl,
    Ownable
{
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private tokenId;
    string private baseURI;
    string public baseExtension = ".json";
    bool public revealed = false;
    string public notRevealedUri;
    uint256 public cost = 0.05 ether;

    event Mint(address _to, uint256 _hero_type, uint256 _tokenId);

    constructor() ERC721("Eye", "EYE") Ownable(_msgSender()) {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function safeMint(
        address to,
        uint256 _heroType
    ) public onlyRole(MINTER_ROLE) {
        _safeMint(to, tokenId);
        emit Mint(to, _heroType, tokenId);
        tokenId++;
    }

    function listTokenIds(
        address _owner
    ) external view returns (uint256[] memory tokenIds) {
        uint balance = balanceOf(_owner);
        uint256[] memory ids = new uint256[](balance);
        for (uint i = 0; i < balance; i++) {
            ids[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return ids;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseUri(string memory _uriSet) public {
        baseURI = _uriSet;
    }

    function setBaseExtension(string memory _newBaseEx) public {
        baseExtension = _newBaseEx;
    }

    function reveal() public onlyOwner {
        revealed = true;
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 _tokenId,
        address auth
    ) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, _tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        if (revealed == false) {
            return notRevealedUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        Strings.toString(_tokenId),
                        baseExtension
                    )
                )
                : "";
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
