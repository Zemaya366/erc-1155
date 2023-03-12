import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ERC20, ERC20Interface } from "../../../mocks/ERC20Mock.sol/ERC20";
declare type ERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20__factory extends ContractFactory {
    constructor(...args: ERC20ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC20>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC20;
    connect(signer: Signer): ERC20__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061069d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806370a082311161005b57806370a08231146100ed578063a457c2d714610123578063a9059cbb14610136578063dd62ed3e1461014957600080fd5b8063095ea7b31461008d57806318160ddd146100b557806323b872dd146100c757806339509351146100da575b600080fd5b6100a061009b36600461055e565b61018f565b60405190151581526020015b60405180910390f35b6002545b6040519081526020016100ac565b6100a06100d5366004610588565b6101a6565b6100a06100e836600461055e565b610204565b6100b96100fb3660046105c4565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100a061013136600461055e565b610247565b6100a061014436600461055e565b61028a565b6100b96101573660046105df565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b600061019c338484610297565b5060015b92915050565b60006101b3848484610346565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600160209081526040808320338085529252909120546101fa9186916101f59086610430565b610297565b5060019392505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161019c9185906101f590866104b5565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161019c9185906101f59086610430565b600061019c338484610346565b73ffffffffffffffffffffffffffffffffffffffff82166102b757600080fd5b73ffffffffffffffffffffffffffffffffffffffff83166102d757600080fd5b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff821661036657600080fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260409020546103969082610430565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526020819052604080822093909355908416815220546103d290826104b5565b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610339565b6000828211156104a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f5700000000000000000060448201526064015b60405180910390fd5b60006104ad8385610641565b949350505050565b6000806104c28385610654565b90508381101561052e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f57000000000000000000006044820152606401610498565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461055957600080fd5b919050565b6000806040838503121561057157600080fd5b61057a83610535565b946020939093013593505050565b60008060006060848603121561059d57600080fd5b6105a684610535565b92506105b460208501610535565b9150604084013590509250925092565b6000602082840312156105d657600080fd5b61052e82610535565b600080604083850312156105f257600080fd5b6105fb83610535565b915061060960208401610535565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156101a0576101a0610612565b808201808211156101a0576101a061061256fea264697066735822122007cbab15e8a47a38baf6ec8241c4658e5fcdb607fe3cadf7b5d8d14bb66ee87e64736f6c63430008120033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20;
}
export {};
