import { ethers } from "ethers";
import { toast } from "react-toastify";

const bankAddress = '0xbC75754091A0bd199Fdd85D744f11672116c207B';

export const buyProduct = async (address: string, price: number) => {
  const contractAddress = '0xe519e0692ffA19ca2430A427CFcceC0b6AF5C201';
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