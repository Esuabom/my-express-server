var logistixxContract = new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_txnId","type":"address"},{"internalType":"string","name":"_shipmentstatus","type":"string"}],"name":"Carrier1Report","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_txnId","type":"address"},{"internalType":"string","name":"_shipmentstatus","type":"string"}],"name":"Carrier2Report","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_txnId","type":"address"},{"internalType":"string","name":"_shipmentstatus","type":"string"}],"name":"Carrier3Report","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_moversAddress","type":"address"}],"name":"ControlMovers","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"MapOrder","outputs":[{"internalType":"bool","name":"isIdgen","type":"bool"},{"internalType":"uint256","name":"productid","type":"uint256"},{"internalType":"string","name":"productname","type":"string"},{"internalType":"string","name":"shipmentstatus","type":"string"},{"internalType":"uint256","name":"productstatus","type":"uint256"},{"internalType":"address","name":"client","type":"address"},{"internalType":"uint256","name":"timeoforder","type":"uint256"},{"internalType":"address","name":"movement1","type":"address"},{"internalType":"uint256","name":"movement1time","type":"uint256"},{"internalType":"address","name":"movement2","type":"address"},{"internalType":"uint256","name":"movement2time","type":"uint256"},{"internalType":"address","name":"movement3","type":"address"},{"internalType":"uint256","name":"movement3time","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_txnId","type":"address"}],"name":"cancelOrder","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_txnId","type":"address"}],"name":"confirmDelivery","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_productid","type":"uint256"},{"internalType":"string","name":"_productname","type":"string"}],"name":"initiateOrder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"movements","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]);
var logistixx = logistixxContract.deploy({
     data: '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611a7a806100606000396000f3fe6080604052600436106100865760003560e01c8063700b1acd11610059578063700b1acd146105025780637f6344151461056957806399c49852146106515780639f7aee821461071b578063cf50ddd0146107d857610086565b8063164f45fe1461008b5780634149ae3114610173578063528b3055146103505780635bb9023e1461041a575b600080fd5b34801561009757600080fd5b50610171600480360360408110156100ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100eb57600080fd5b8201836020820111156100fd57600080fd5b8035906020019184600183028401116401000000008311171561011f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506108d4565b005b34801561017f57600080fd5b506101c26004803603602081101561019657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610af5565b604051808e151581526020018d815260200180602001806020018c81526020018b73ffffffffffffffffffffffffffffffffffffffff1681526020018a81526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183810383528e818151815260200191508051906020019080838360005b838110156102a2578082015181840152602081019050610287565b50505050905090810190601f1680156102cf5780820380516001836020036101000a031916815260200191505b5083810382528d818151815260200191508051906020019080838360005b838110156103085780820151818401526020810190506102ed565b50505050905090810190601f1680156103355780820380516001836020036101000a031916815260200191505b509f5050505050505050505050505050505060405180910390f35b34801561035c57600080fd5b5061039f6004803603602081101561037357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d18565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103df5780820151818401526020810190506103c4565b50505050905090810190601f16801561040c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561042657600080fd5b506105006004803603604081101561043d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561047a57600080fd5b82018360208201111561048c57600080fd5b803590602001918460018302840111640100000000831117156104ae57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610eb6565b005b34801561050e57600080fd5b506105516004803603602081101561052557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061111f565b60405180821515815260200191505060405180910390f35b34801561057557600080fd5b5061064f6004803603604081101561058c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156105c957600080fd5b8201836020820111156105db57600080fd5b803590602001918460018302840111640100000000831117156105fd57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061113f565b005b34801561065d57600080fd5b506106a06004803603602081101561067457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113a7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106e05780820151818401526020810190506106c5565b50505050905090810190601f16801561070d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61075d6004803603602081101561073157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115ad565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561079d578082015181840152602081019050610782565b50505050905090810190601f1680156107ca5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156107e457600080fd5b506108a8600480360360408110156107fb57600080fd5b81019080803590602001909291908035906020019064010000000081111561082257600080fd5b82018360208201111561083457600080fd5b8035906020019184600183028401116401000000008311171561085657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611704565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661092d57600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661098357600080fd5b6002600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040154146109d257600080fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003019080519060200190610a289291906119a7565b5033600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060090160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a01819055505050565b60016020528060005260406000206000915090508060000160009054906101000a900460ff1690806001015490806002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bba5780601f10610b8f57610100808354040283529160200191610bba565b820191906000526020600020905b815481529060010190602001808311610b9d57829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c585780601f10610c2d57610100808354040283529160200191610c58565b820191906000526020600020905b815481529060010190602001808311610c3b57829003601f168201915b5050505050908060040154908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154908060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060080154908060090160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600a01549080600b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600c015490508d565b60603373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d7257600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610e20576001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e79565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b6040518060400160405280601781526020017f4d6f76657220757064617465207375636365737366756c0000000000000000008152509050919050565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16610f0f57600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f6557600080fd5b6002600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004015414610fb457600080fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301908051906020019061100a9291906119a7565b5033600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600801819055506004600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401819055505050565b60026020528060005260406000206000915054906101000a900460ff1681565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661119857600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166111ee57600080fd5b60018060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401541461123c57600080fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030190805190602001906112929291906119a7565b5033600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600801819055506002600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401819055505050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661140257600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461149c57600080fd5b6004600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401819055506040518060400160405280600f81526020017f4f726465722043616e63656c6c65640000000000000000000000000000000000815250600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301908051906020019061156f9291906119a7565b506040518060400160405280601d81526020017f596f7572206f7264657220686173206265656e2063616e63656c6c65640000008152509050919050565b60603373ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461164957600080fd5b6004600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401541461169857600080fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156116fe573d6000803e3d6000fd5b50919050565b60008033905060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690831515021790555083600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555082600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020190805190602001906118019291906119a7565b506040518060400160405280601081526020017f50726f63657373696e67206f7264657200000000000000000000000000000000815250600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301908051906020019061188d9291906119a7565b5060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018190555033600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600601819055508091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106119e857805160ff1916838001178555611a16565b82800160010185558215611a16579182015b82811115611a155782518255916020019190600101906119fa565b5b509050611a239190611a27565b5090565b5b80821115611a40576000816000905550600101611a28565b509056fea2646970667358221220e6dfa42d5c160459f91a25c735f35c4573e44fe40440c9126136ecddae18da1864736f6c634300060c0033', 
     arguments: [
     ]
}).send({
     from: web3.eth.accounts[0], 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })