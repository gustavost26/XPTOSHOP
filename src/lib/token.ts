import { ethers } from "ethers";
import { toast } from "react-toastify";

const bankAddress = '0xbC75754091A0bd199Fdd85D744f11672116c207B';

export const buyProduct = async (address: string, price: number) => {
  const contractAddress = '0x3f0af63F73AFe2C5f084e1C48B94C13b255867bA';
  const contractABI = [
    "function transfer(address to, uint amount) public returns (bool)"
  ];

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const erc20 = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    const tx = await erc20.transfer(bankAddress, ethers.parseUnits(price.toString(), 18));
    toast.info('Transação enviada, esperando confirmação...');
    const receipt = await tx.wait();
    return {
      isSuccess: true,
      txHash: receipt.hash,
      error: null
    }
  } catch (error) {
    console.error('Ocorreu um erro ao enviar a transação de transferência');
    return {
      isSuccess: false,
      txHash: null,
      error,
    }
  }
};

// forge create --rpc-url https://rpc.ankr.com/polygon_amoy --private-key b9c31c3a752377c772983feee784870e5eead1cefb506dfbec8276275abb3363 MyFirstToken.sol:Kryptonita --constructor-args 10000000
// forge create --rpc-url https://rpc.ankr.com/polygon_amoy --private-key b9c31c3a752377c772983feee784870e5eead1cefb506dfbec8276275abb3363 src/MeuPrimeiroToken.sol:MeuToken --constructor-args 10000000
/*
Deployer: 0x942d96d446368C57B9A0599C51FCe02480cF6a65
Deployed to: 0x3f0af63F73AFe2C5f084e1C48B94C13b255867bA
Transaction hash: 0xf11a63c76c6318908080f69982d77eab0cec6b4631cacb65e18389b7b0cce5f2
*/