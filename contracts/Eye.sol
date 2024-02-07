// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Eye is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private tokenIdCurrent;
    string private _uri;

    event Mint(address _to, uint256 _hero_type, uint256 _tokenId);

    constructor() ERC721("Eye", "EYE") {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function safeMint(address to, uint256 _heroType) public onlyRole(MINTER_ROLE) {
        _safeMint(to, tokenIdCurrent);
        emit Mint(to, _heroType, tokenIdCurrent);
        tokenIdCurrent++;
    }

    function setBaseUri(string memory _uriSet) public {
        _uri = _uriSet;
    }

    function listTokenIds(address _owner) external view returns (uint256[] memory tokenIds) {
        uint balance = balanceOf(_owner);
        uint256[] memory ids = new uint256[](balance);
        for(uint i = 0; i < balance; i++) {
            ids[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return ids;
    }

    function _baseURI() internal view override returns (string memory) {
        return _uri;
    }

    // The following functions are overrides required by Solidity.

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}