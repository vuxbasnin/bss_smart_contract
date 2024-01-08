//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BSSCrowdSale is Ownable {
    using SafeERC20 for IERC20;
    address payable public wallet;
    uint256 public BNB_rate;
    uint256 public USDT_rate;
    IERC20 public token;
    IERC20 public usdtToken;

    event BuyTokenByBNB(address _buyer, uint256 _amount);
    event BuyTokenByUSDT(address _buyer, uint256 _amount);
    event SetUSDTToken(IERC20 _tokenAddress);
    event SetUSDTRate(uint256 _newRate);
    event SetBNBRate(uint256 _newRate);

    constructor(
        uint256 _bnbRate,
        uint256 _usdtRate,
        address payable _wallet,
        IERC20 _icoToken
    ) Ownable(msg.sender) {
        BNB_rate = _bnbRate;
        USDT_rate = _usdtRate;
        wallet = _wallet;
        token = _icoToken;
    }

    function setUSDTToken(IERC20 _tokenAddress) public onlyOwner {
        usdtToken = _tokenAddress;
        emit SetUSDTToken(_tokenAddress);
    }

    function setBNBRate(uint256 _newRate) public onlyOwner {
        BNB_rate = _newRate;
        emit SetBNBRate(_newRate);
    }

    function setUSDTRate(uint256 _newRate) public onlyOwner {
        USDT_rate = _newRate;
        emit SetUSDTRate(_newRate);
    }

    function buyTokenByBNB() external payable {
        uint256 bnbAmount = msg.value;
        uint256 amount = getTokenAmountBNB(bnbAmount);
        require(amount > 0, "Amount is zero!");
        //check smart contract enought token to sale
        require(
            token.balanceOf(address(this)) >= amount,
            "Insufficient account balance!"
        );
        require(
            msg.sender.balance >= bnbAmount,
            "Insufficient account balance!"
        );
        payable(wallet).transfer(bnbAmount);
        SafeERC20.safeTransfer(token, msg.sender, amount);
        emit BuyTokenByBNB(msg.sender, amount);
    }

    function buyTokenByUSDT(uint256 _usdtAmount) external {
        uint256 amount = getTokenAmountUSDT(_usdtAmount);
        require(
            msg.sender.balance >= _usdtAmount,
            "Insufficient account balance!"
        );
        require(amount > 0, "Amount is zero!");
        //check smart contract enought token to sale
        require(
            token.balanceOf(address(this)) >= amount,
            "Insufficient account balance!"
        );
        SafeERC20.safeTransferFrom(token, msg.sender, wallet, _usdtAmount);
        SafeERC20.safeTransfer(token, msg.sender, amount);
        emit BuyTokenByUSDT(msg.sender, amount);
    }

    function getTokenAmountBNB(uint256 _amount) public view returns (uint256) {
        return _amount * BNB_rate;
    }

    function getTokenAmountUSDT(uint256 _amount) public view returns (uint256) {
        return _amount * USDT_rate;
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawErc20() public onlyOwner {
        usdtToken.transfer(msg.sender, usdtToken.balanceOf(address(this)));
    }
}