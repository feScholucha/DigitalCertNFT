// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



//Contrato final para emissão de certificados como NFTs
contract CertificadoDigitalNFT is ERC721URIStorage, Ownable {
    // Habilita o uso da biblioteca Counters para o tipo Counter
    using Counters for Counters.Counter;
    
    // Contador privado para rastrear o próximo ID do token
    Counters.Counter private _tokenIdCounter;


    // O construtor define o nome, símbolo e o dono inicial (instituição)
    constructor(address initialOwner)
        ERC721("Certificado Digital", "CERT")
        // Define o dono do contrato (quem fez o deploy)
        Ownable(initialOwner)
    {}

    // Função principal para emitir um novo certificado
    // Restrita apenas ao dono do contrato
    function emitirCertificado(address para, string memory tokenURI) public onlyOwner {
        // Incrementa o contador para obter um novo ID
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        
        // Mint
        _safeMint(para, tokenId);
        // Link
        _setTokenURI(tokenId, tokenURI);
    }
}