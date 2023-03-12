/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory, } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "domain_hash_1155",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "ERC1271_INVALID",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ERC1271_MAGICVALUE_BYTES32",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ERC1271_MAGIC_VAL",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes",
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "magicValue",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes",
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "magicValue",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_values",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516110b43803806110b483398101604081905261002f91610061565b600055600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905561007a565b60006020828403121561007357600080fd5b5051919050565b61102b806100896000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b14610137578063a886100f1461017c578063bc197c81146101a3578063f23a6e61146101db57600080fd5b80630c0b5b8b1461008d5780631626ba7e146100ea57806320c13b0b146100fd5780632ec40aa414610110575b600080fd5b6100b47f20c13b0b0000000000000000000000000000000000000000000000000000000081565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b6100b46100f8366004610b78565b610213565b6100b461010b366004610bc4565b61041c565b6100b47f1626ba7e0000000000000000000000000000000000000000000000000000000081565b6001546101579073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e1565b6100b47fdeadbeef0000000000000000000000000000000000000000000000000000000081565b6100b46101b1366004610de5565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6100b46101e9366004610e8f565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60008061025a600085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e69050565b905060006102a2602086868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e69050565b90506000858560408181106102b9576102b9610ef4565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018b905292013560f81c925060009160019150605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff851690820152606081018690526080810185905260a0016020604051602081039080840390855afa158015610377573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015160015490925073ffffffffffffffffffffffffffffffffffffffff80841691161490506103ec577fdeadbeef0000000000000000000000000000000000000000000000000000000061040e565b7f1626ba7e000000000000000000000000000000000000000000000000000000005b9450505050505b9392505050565b600080610463600087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e69050565b905060006060807f31f4aeb4c6ce4241b2a2bb1b0fca5018eec89848248e6b6d8e0959d2639f0aa884016105be576104d389898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250925060e091506108a29050565b915060006104e28360606107e6565b905060006104f18460806107e6565b90506042821415806105035750606481115b1561053757507fdeadbeef0000000000000000000000000000000000000000000000000000000095506107de945050505050565b61057b8b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060e092508e91506108a29050565b92506105b584848051906020012060405160200161059a929190610f47565b604051602081830303815290604052805190602001206109e5565b945050506105d9565b88886040516105ce929190610f69565b604051809103902092505b600061061f600089898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e69050565b9050600061066760208a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e69050565b905060008989604081811061067e5761067e610ef4565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018a905292013560f81c925060009160019150605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff851690820152606081018690526080810185905260a0016020604051602081039080840390855afa15801561073c573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015160015490925073ffffffffffffffffffffffffffffffffffffffff80841691161490506107b1577fdeadbeef000000000000000000000000000000000000000000000000000000006107d3565b7f20c13b0b000000000000000000000000000000000000000000000000000000005b985050505050505050505b949350505050565b60006107f3826020610fa8565b83511015610888576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260448201527f5f455155414c5f544f5f33325f4c454e4754485f52455155495245440000000060648201526084015b60405180910390fd5b610893602083610fa8565b91508183015190505b92915050565b60608183111561090e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4552433132373157616c6c65744d6f636b23736c6963653a204572726f720000604482015260640161087f565b8351821115610979576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4552433132373157616c6c65744d6f636b23736c6963653a204572726f720000604482015260640161087f565b6109838383610fbb565b67ffffffffffffffff81111561099b5761099b610c59565b6040519080825280601f01601f1916602001820160405280156109c5576020820181803683370190505b5090506104156020820184602087016109de9190610fa8565b8351610a50565b60006040518060400160405280600281526020017f190100000000000000000000000000000000000000000000000000000000000081525060005483604051602001610a3393929190610fce565b604051602081830303815290604052805190602001209050919050565b6020811015610a97578151835160208390036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116178352505050565b828203610aa357505050565b82821115610add5760208103905080820181840181515b82851015610ad5578451865260209586019590940193610aba565b905250505050565b60208103905080820181840183515b81861215610b2657825182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09283019290910190610aec565b85525050505050565b60008083601f840112610b4157600080fd5b50813567ffffffffffffffff811115610b5957600080fd5b602083019150836020828501011115610b7157600080fd5b9250929050565b600080600060408486031215610b8d57600080fd5b83359250602084013567ffffffffffffffff811115610bab57600080fd5b610bb786828701610b2f565b9497909650939450505050565b60008060008060408587031215610bda57600080fd5b843567ffffffffffffffff80821115610bf257600080fd5b610bfe88838901610b2f565b90965094506020870135915080821115610c1757600080fd5b50610c2487828801610b2f565b95989497509550505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c5457600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610ccf57610ccf610c59565b604052919050565b600082601f830112610ce857600080fd5b8135602067ffffffffffffffff821115610d0457610d04610c59565b8160051b610d13828201610c88565b9283528481018201928281019087851115610d2d57600080fd5b83870192505b84831015610d4c57823582529183019190830190610d33565b979650505050505050565b600082601f830112610d6857600080fd5b813567ffffffffffffffff811115610d8257610d82610c59565b610db360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610c88565b818152846020838601011115610dc857600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610dfd57600080fd5b610e0686610c30565b9450610e1460208701610c30565b9350604086013567ffffffffffffffff80821115610e3157600080fd5b610e3d89838a01610cd7565b94506060880135915080821115610e5357600080fd5b610e5f89838a01610cd7565b93506080880135915080821115610e7557600080fd5b50610e8288828901610d57565b9150509295509295909350565b600080600080600060a08688031215610ea757600080fd5b610eb086610c30565b9450610ebe60208701610c30565b93506040860135925060608601359150608086013567ffffffffffffffff811115610ee857600080fd5b610e8288828901610d57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b83811015610f3e578181015183820152602001610f26565b50506000910152565b60008351610f59818460208801610f23565b9190910191825250602001919050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561089c5761089c610f79565b8181038181111561089c5761089c610f79565b60008451610fe0818460208901610f23565b9190910192835250602082015260400191905056fea2646970667358221220f701eb25102fbe91eb7678e8b6db3ed10117cfba28f689b998bc76f95c0d2b1d64736f6c63430008120033";
const isSuperArgs = (xs) => xs.length > 1;
export class ERC1271WalletValidationMock__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(domain_hash_1155, overrides) {
        return super.deploy(domain_hash_1155, overrides || {});
    }
    getDeployTransaction(domain_hash_1155, overrides) {
        return super.getDeployTransaction(domain_hash_1155, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
ERC1271WalletValidationMock__factory.bytecode = _bytecode;
ERC1271WalletValidationMock__factory.abi = _abi;
