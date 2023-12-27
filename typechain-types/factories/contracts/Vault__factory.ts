/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Vault, VaultInterface } from "../../contracts/Vault";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WITHDRAWER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWithdrawAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxAmount",
        type: "uint256",
      },
    ],
    name: "setMaxWithdrawAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isEnable",
        type: "bool",
      },
    ],
    name: "setWithdrawEnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5062000022620000d460201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000975760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016200008e919062000479565b60405180910390fd5b620000a881620000dc60201b60201c565b50620000cd6000801b620000c1620000d460201b60201c565b620001a060201b60201c565b5062000496565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080620001b58484620001f160201b60201c565b90508015620001e757620001e58360026000878152602001908152602001600020620002f460201b90919060201c565b505b8091505092915050565b60006200020583836200032c60201b60201c565b620002e957600180600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000285620000d460201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050620002ee565b600090505b92915050565b600062000324836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6200039760201b60201c565b905092915050565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000620003ab83836200041160201b60201c565b620004065782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506200040b565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004618262000434565b9050919050565b620004738162000454565b82525050565b600060208201905062000490600083018462000468565b92915050565b611d0880620004a66000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80639010d07c116100ad578063d547741f11610071578063d547741f1461032f578063df74e0281461034b578063f2fde38b14610367578063f3fef3a314610383578063f516440c1461039f5761012c565b80639010d07c1461026557806391d1485414610295578063a217fddf146102c5578063b6b55f25146102e3578063ca15c873146102ff5761012c565b806336568abe116100f457806336568abe146101e7578063715018a614610203578063827a560b1461020d57806385f438c1146102295780638da5cb5b146102475761012c565b806301ffc9a714610131578063144fa6d7146101615780632287e96a1461017d578063248a9ca31461019b5780632f2ff15d146101cb575b600080fd5b61014b60048036038101906101469190611505565b6103bd565b604051610158919061154d565b60405180910390f35b61017b600480360381019061017691906115d8565b610437565b005b610185610483565b604051610192919061154d565b60405180910390f35b6101b560048036038101906101b0919061163b565b610496565b6040516101c29190611677565b60405180910390f35b6101e560048036038101906101e091906116be565b6104b6565b005b61020160048036038101906101fc91906116be565b6104d8565b005b61020b610553565b005b6102276004803603810190610222919061172a565b610567565b005b61023161058c565b60405161023e9190611677565b60405180910390f35b61024f6105b0565b60405161025c9190611766565b60405180910390f35b61027f600480360381019061027a91906117b7565b6105d9565b60405161028c9190611766565b60405180910390f35b6102af60048036038101906102aa91906116be565b610608565b6040516102bc919061154d565b60405180910390f35b6102cd610673565b6040516102da9190611677565b60405180910390f35b6102fd60048036038101906102f891906117f7565b61067a565b005b6103196004803603810190610314919061163b565b610789565b6040516103269190611833565b60405180910390f35b610349600480360381019061034491906116be565b6107ad565b005b610365600480360381019061036091906117f7565b6107cf565b005b610381600480360381019061037c919061184e565b6107e1565b005b61039d6004803603810190610398919061187b565b610867565b005b6103a7610a54565b6040516103b49190611833565b60405180910390f35b60007f5a05180f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610430575061042f82610a5a565b5b9050919050565b61043f610ad4565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600560009054906101000a900460ff1681565b600060016000838152602001908152602001600020600101549050919050565b6104bf82610496565b6104c881610b5b565b6104d28383610b6f565b50505050565b6104e0610bb5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610544576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054e8282610bbd565b505050565b61055b610ad4565b6105656000610c03565b565b61056f610ad4565b80600560006101000a81548160ff02191690831515021790555050565b7f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006106008260026000868152602001908152602001600020610cc790919063ffffffff16565b905092915050565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016106d69190611766565b602060405180830381865afa1580156106f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071791906118d0565b1015610758576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074f9061195a565b60405180910390fd5b610786600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333084610ce1565b50565b60006107a660026000848152602001908152602001600020610d63565b9050919050565b6107b682610496565b6107bf81610b5b565b6107c98383610bbd565b50505050565b6107d7610ad4565b8060048190555050565b6107e9610ad4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361085b5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108529190611766565b60405180910390fd5b61086481610c03565b50565b61086f610bb5565b73ffffffffffffffffffffffffffffffffffffffff1661088d6105b0565b73ffffffffffffffffffffffffffffffffffffffff1614806108dc57506108db7f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e46108d6610bb5565b610608565b5b61091b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610912906119c6565b60405180910390fd5b600560009054906101000a900460ff1661096a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096190611a32565b60405180910390fd5b6004548111156109af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a690611a9e565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610a0c929190611abe565b6020604051808303816000875af1158015610a2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4f9190611afc565b505050565b60045481565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610acd5750610acc82610d78565b5b9050919050565b610adc610bb5565b73ffffffffffffffffffffffffffffffffffffffff16610afa6105b0565b73ffffffffffffffffffffffffffffffffffffffff1614610b5957610b1d610bb5565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610b509190611766565b60405180910390fd5b565b610b6c81610b67610bb5565b610de2565b50565b600080610b7c8484610e33565b90508015610bab57610ba98360026000878152602001908152602001600020610f2490919063ffffffff16565b505b8091505092915050565b600033905090565b600080610bca8484610f54565b90508015610bf957610bf7836002600087815260200190815260200160002061104790919063ffffffff16565b505b8091505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000610cd68360000183611077565b60001c905092915050565b610d5d848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401610d1693929190611b29565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506110a2565b50505050565b6000610d7182600001611139565b9050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610dec8282610608565b610e2f5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401610e26929190611b60565b60405180910390fd5b5050565b6000610e3f8383610608565b610f1957600180600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610eb6610bb5565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610f1e565b600090505b92915050565b6000610f4c836000018373ffffffffffffffffffffffffffffffffffffffff1660001b61114a565b905092915050565b6000610f608383610608565b1561103c5760006001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610fd9610bb5565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611041565b600090505b92915050565b600061106f836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6111ba565b905092915050565b600082600001828154811061108f5761108e611b89565b5b9060005260206000200154905092915050565b60006110cd828473ffffffffffffffffffffffffffffffffffffffff166112ce90919063ffffffff16565b905060008151141580156110f25750808060200190518101906110f09190611afc565b155b1561113457826040517f5274afe700000000000000000000000000000000000000000000000000000000815260040161112b9190611766565b60405180910390fd5b505050565b600081600001805490509050919050565b600061115683836112e4565b6111af5782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506111b4565b600090505b92915050565b600080836001016000848152602001908152602001600020549050600081146112c25760006001826111ec9190611be7565b90506000600186600001805490506112049190611be7565b905080821461127357600086600001828154811061122557611224611b89565b5b906000526020600020015490508087600001848154811061124957611248611b89565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b8560000180548061128757611286611c1b565b5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506112c8565b60009150505b92915050565b60606112dc83836000611307565b905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b60608147101561134e57306040517fcd7860590000000000000000000000000000000000000000000000000000000081526004016113459190611766565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1684866040516113779190611cbb565b60006040518083038185875af1925050503d80600081146113b4576040519150601f19603f3d011682016040523d82523d6000602084013e6113b9565b606091505b50915091506113c98683836113d4565b925050509392505050565b6060826113e9576113e482611463565b61145b565b60008251148015611411575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561145357836040517f9996b31500000000000000000000000000000000000000000000000000000000815260040161144a9190611766565b60405180910390fd5b81905061145c565b5b9392505050565b6000815111156114765780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6114e2816114ad565b81146114ed57600080fd5b50565b6000813590506114ff816114d9565b92915050565b60006020828403121561151b5761151a6114a8565b5b6000611529848285016114f0565b91505092915050565b60008115159050919050565b61154781611532565b82525050565b6000602082019050611562600083018461153e565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061159382611568565b9050919050565b60006115a582611588565b9050919050565b6115b58161159a565b81146115c057600080fd5b50565b6000813590506115d2816115ac565b92915050565b6000602082840312156115ee576115ed6114a8565b5b60006115fc848285016115c3565b91505092915050565b6000819050919050565b61161881611605565b811461162357600080fd5b50565b6000813590506116358161160f565b92915050565b600060208284031215611651576116506114a8565b5b600061165f84828501611626565b91505092915050565b61167181611605565b82525050565b600060208201905061168c6000830184611668565b92915050565b61169b81611588565b81146116a657600080fd5b50565b6000813590506116b881611692565b92915050565b600080604083850312156116d5576116d46114a8565b5b60006116e385828601611626565b92505060206116f4858286016116a9565b9150509250929050565b61170781611532565b811461171257600080fd5b50565b600081359050611724816116fe565b92915050565b6000602082840312156117405761173f6114a8565b5b600061174e84828501611715565b91505092915050565b61176081611588565b82525050565b600060208201905061177b6000830184611757565b92915050565b6000819050919050565b61179481611781565b811461179f57600080fd5b50565b6000813590506117b18161178b565b92915050565b600080604083850312156117ce576117cd6114a8565b5b60006117dc85828601611626565b92505060206117ed858286016117a2565b9150509250929050565b60006020828403121561180d5761180c6114a8565b5b600061181b848285016117a2565b91505092915050565b61182d81611781565b82525050565b60006020820190506118486000830184611824565b92915050565b600060208284031215611864576118636114a8565b5b6000611872848285016116a9565b91505092915050565b60008060408385031215611892576118916114a8565b5b60006118a0858286016116a9565b92505060206118b1858286016117a2565b9150509250929050565b6000815190506118ca8161178b565b92915050565b6000602082840312156118e6576118e56114a8565b5b60006118f4848285016118bb565b91505092915050565b600082825260208201905092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000611944601c836118fd565b915061194f8261190e565b602082019050919050565b6000602082019050818103600083015261197381611937565b9050919050565b7f43616c6c6572206973206e6f7420612077697468647261776572000000000000600082015250565b60006119b0601a836118fd565b91506119bb8261197a565b602082019050919050565b600060208201905081810360008301526119df816119a3565b9050919050565b7f5769746864726177206973206e6f7420617661696c61626c6500000000000000600082015250565b6000611a1c6019836118fd565b9150611a27826119e6565b602082019050919050565b60006020820190508181036000830152611a4b81611a0f565b9050919050565b7f457863656564206d6178696d756d20616d6f756e740000000000000000000000600082015250565b6000611a886015836118fd565b9150611a9382611a52565b602082019050919050565b60006020820190508181036000830152611ab781611a7b565b9050919050565b6000604082019050611ad36000830185611757565b611ae06020830184611824565b9392505050565b600081519050611af6816116fe565b92915050565b600060208284031215611b1257611b116114a8565b5b6000611b2084828501611ae7565b91505092915050565b6000606082019050611b3e6000830186611757565b611b4b6020830185611757565b611b586040830184611824565b949350505050565b6000604082019050611b756000830185611757565b611b826020830184611668565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611bf282611781565b9150611bfd83611781565b9250828203905081811115611c1557611c14611bb8565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081519050919050565b600081905092915050565b60005b83811015611c7e578082015181840152602081019050611c63565b60008484015250505050565b6000611c9582611c4a565b611c9f8185611c55565b9350611caf818560208601611c60565b80840191505092915050565b6000611cc78284611c8a565b91508190509291505056fea2646970667358221220c4ac21d6de9a0afa1dcc195dd001ac1a89fc02af28b8a4126cc2a94f246286f464736f6c63430008150033";

type VaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault__factory extends ContractFactory {
  constructor(...args: VaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Vault & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Vault__factory {
    return super.connect(runner) as Vault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new Interface(_abi) as VaultInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Vault {
    return new Contract(address, _abi, runner) as unknown as Vault;
  }
}