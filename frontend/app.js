
// Hardcoded Deployment
// Coloque aqui o endereço do contrato
// Se foi feito na remix IDE e perdeu o contrato anterior, não se esqueça de atualizar
// Os NFTs feitos com o antigo contrato ainda valerão para tal endereço para obter os metadados do ID escolhido

const contractAddress = "0xae0B2171afac0D5f479144Eeb1D8132baCD90802"; // Contrato Atual
// const contractAddress = "0x3a6530fF3bCF6f42082AaE22699a177A74e202DA"; // Contrato Anterior de exemplo

// ABI do contrato obtido do Remix
// Por ser exemplo de MVP, está hardcoded, mas pode ser importado por json facilmente
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "initialOwner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "para",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            }
        ],
        "name": "emitirCertificado",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


// Variáveis globais para Ethers.js
let provider;
let signer;
let contract;

// Referências aos elementos do HTML
const connectButton = document.getElementById('connectButton');
const emitButton = document.getElementById('emitButton');
const verifyButton = document.getElementById('verifyButton');
const resultDiv = document.getElementById('result');

// Conecta à carteira MetaMask
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Solicita ao MetaMask para se conectar
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Inicializa o provedor
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.ready;
            
            const network = await provider.getNetwork();
            const sepoliaChainId = 11155111; // Este é o ID da rede de teste Sepolia
            // Obs: se for trocar de rede, não se esqueça de alterar aqui! (Ex: rede Besu da aula, colocar id como 1337)

            if (network.chainId !== sepoliaChainId) {
                // Se não estiver na Sepolia, avisa o usuário
                alert(`Rede errada! Por favor, mude seu MetaMask para a rede Sepolia (Chain ID: ${sepoliaChainId}).`);
                // Fallback: tenta forçar a mudança de rede
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x' + (sepoliaChainId).toString(16) }], // Converte 11155111 para "0xAA36A7"
                    });
                    // Recarrega a página para garantir que tudo seja reinicializado com a nova rede
                    window.location.reload();
                    return;
                } catch (switchError) {
                    // O usuário rejeitou a troca de rede
                    console.error("Usuário rejeitou a troca de rede.", switchError);
                    alert("Você precisa estar na rede Sepolia para usar este dApp.");
                    return;
                }
            }
            
            signer = provider.getSigner();
            // Carrega o contrato
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            // Atualiza o texto do botão
            const address = await signer.getAddress();
            connectButton.textContent = `Conectado: ${address.substring(0, 6)}...${address.substring(38)}`;
            console.log("Conectado com:", address);
            console.log("Rede detectada:", network.name, " (ID:", network.chainId, ")");

        } catch (error) {
            // Captura outros erros, como o User rejeitar a conexão inicial
            console.error("Erro ao conectar:", error);
            alert("Erro ao conectar: " + error.message);
        }
    } else {
        alert("MetaMask não detectado! Instale o MetaMask para usar este dApp.");
    }
}

// Função para chamar 'emitirCertificado' no contrato
async function emitCertificate() {
    if (!signer) {
        alert("Por favor, conecte sua carteira primeiro.");
        return;
    }

    const alunoAddress = document.getElementById('alunoAddress').value;
    const tokenURI = document.getElementById('tokenURI').value;

    if (!alunoAddress || !tokenURI) {
        alert("Por favor, preencha o endereço do aluno e a URI.");
        return;
    }

    console.log(`Emitindo certificado para ${alunoAddress} com URI ${tokenURI}...`);
    resultDiv.innerHTML = "Emitindo... Por favor, aprove a transação no MetaMask.";

    try {
        // Chama a função 'emitirCertificado' do seu contrato
        const tx = await contract.emitirCertificado(alunoAddress, tokenURI);

        // Aguarda a transação ser minerada
        await tx.wait();

        console.log("Transação bem-sucedida!", tx);
        resultDiv.innerHTML = `Certificado emitido com sucesso! Hash da transação: ${tx.hash}`;

    } catch (error) {
        console.error("Erro ao emitir certificado:", error);
        // O erro mais comum é "OwnerOnly"
        // Use esse erro como teste de robustez
        if (error.message.includes("OwnableUnauthorizedAccount")) {
            resultDiv.innerHTML = "Erro: Apenas a carteira da instituição (dono) pode emitir certificados.";
        } else {
            resultDiv.innerHTML = "Erro ao emitir certificado. Veja o console para detalhes.";
        }
    }
}

// Função para verificar os dados de um certificado
async function verifyCertificate() {
    // Para verificação, qualquer um pode fazer, então usamos o "provider"
    // se o signer não estiver disponível (usuário não conectado)
    let contractReader = contract;
    if (!contractReader) {
        // Se o usuário não conectou, criamos uma conexão "somente leitura"
        const readProvider = new ethers.providers.JsonRpcProvider('https://rpc.sepolia.org'); // Provider público da Sepolia
        contractReader = new ethers.Contract(contractAddress, contractABI, readProvider);
    }

    const tokenId = document.getElementById('tokenId').value;
    if (!tokenId) {
        alert("Por favor, insira um ID de token.");
        return;
    }

    console.log(`Verificando Token ID: ${tokenId}...`);
    resultDiv.innerHTML = "Verificando...";

    try {
        // Chama as funções de leitura do seu contrato
        const ownerAddress = await contractReader.ownerOf(tokenId);
        const tokenURI = await contractReader.tokenURI(tokenId);

        resultDiv.innerHTML = `
            <h3>Certificado Válido</h3>
            <p><strong>ID do Token:</strong> ${tokenId}</p>
            <p><strong>Dono (Aluno):</strong> ${ownerAddress}</p>
            <p><strong>Metadados (IPFS):</strong> ${tokenURI}</p>
        `;

    } catch (error) {
        console.error("Erro ao verificar:", error);
        resultDiv.innerHTML = "Erro: Não foi possível verificar este ID. O token existe?";
    }
}

// Adiciona os listeners de eventos aos botões
connectButton.addEventListener('click', connectWallet);
emitButton.addEventListener('click', emitCertificate);
verifyButton.addEventListener('click', verifyCertificate);