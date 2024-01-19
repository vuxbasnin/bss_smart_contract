pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/extensions/AccessControlEnumerable.sol";

/**
 * @title prevent any one can interactive with contract container money
 * @author vuxbasnin
 * @notice must set role for address sender can withdraw
 */

contract Vault is Ownable, AccessControlEnumerable {
    
    constructor() Ownable(_msgSender()) {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    IERC20 private token;   //set token can deposit or withdraw
    uint256 public maxWithdrawAmount;
    bool public withdrawEnabled;
    bytes32 public constant WITHDRAWER_ROLE = keccak256("WITHDRAWER_ROLE"); //access role

    modifier onlyWithdrawer() {
        require(
            owner() == _msgSender() || hasRole(WITHDRAWER_ROLE, _msgSender()),
            "Caller is not a withdrawer"
        );
        _;
    }

    function setWithdrawEnable(bool _isEnable) public onlyOwner {
        withdrawEnabled = _isEnable;
    }

    function setMaxWithdrawAmount(uint256 _maxAmount) public onlyOwner {
        maxWithdrawAmount = _maxAmount;
    }

    function setToken(IERC20 _token) public onlyOwner {
        token = _token;
    }

    function withdraw(address _to, uint256 _amount) external onlyWithdrawer {
        require(withdrawEnabled, "Withdraw is not available");
        require(_amount <= maxWithdrawAmount, "Exceed maximum amount");
        token.transfer(_to, _amount);
    }

    function deposit(uint256 _amount) external {
        require(
            token.balanceOf(msg.sender) >= _amount,
            "Insufficient account balance"
        );
        SafeERC20.safeTransferFrom(token, msg.sender, address(this), _amount);
    }
}
