//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

/**
 * @title Contract create token ERC20 BSSToken
 * @author vuxbasnin
 * @notice 
 */

contract BSSToken is ERC20, ERC20Burnable, ERC20Pausable, Ownable, ERC20Permit {

    //constructor token
    constructor()
        ERC20("BSSToken", "BSS")
        Ownable(msg.sender)
        ERC20Permit("BSSToken")
    {
        //decimals default is 18
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    //pause contract
    function pause() public onlyOwner {
        _pause();
    }

    //unpause contract
    function unpause() public onlyOwner {
        _unpause();
    }

    //mint token in constructor
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.
    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Pausable)
    {
        super._update(from, to, value);
    }
}