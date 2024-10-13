// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "@lib/forge/src/Test.sol";
import "./src/Kryptonita.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Arrange, Act, Assert

interface CheatCodes {
    function startPrank(address) external;
    function stopPrank() external;
    function expectRevert() external;
}

contract KryptonitaTest is Test {
    Kryptonita private kpt;
    CheatCodes cheats = CheatCodes(VM_ADDRESS);

    address defaultOwner = address(1);
    address notAuthorizedMinter = address(3);
    uint256 initialSupply = 1000 * 1e18;

    function setup() public {
        cheats.startPrank(defaultOwner);
        kpt = new Kryptonita(defaultOwner, initialSupply);
        cheats.stopPrank();
    }

    function testInitialSetup() public view {
        assertEq(kpt.owner(), defaultOwner, "O owner deveria ser o definido no contrato");
        assertEq(kpt.totalSupply(), initialSupply, "A supply deve ser igual a definida na criacao do contrato");
    }

    function testMint() public {
        // Arrange
        address recipient = address(89);
        uint256 mintAmount = 500 * 1e18;

        // Act
        cheats.startPrank(defaultOwner);
        kpt.mint(recipient, mintAmount);

        uint256 newBalance = kpt.balanceOf(recipient);
        uint256 newSupply = initialSupply + mintAmount;
        cheats.stopPrank();

        // Assert
        assertEq(newBalance, mintAmount, "Saldo do recipient nao esta batendo");
        assertEq(kpt.totalSupply(), newSupply, "A supply esta diferente do que deveria");
    }

    function testTransfer() public {
        // Arrange
        address recipient = address(87);
        uint256 transferAmount = 100 * 1e18;

        // Act
        uint256 senderOldBalance = kpt.balanceOf(defaultOwner);
        uint256 recipientOldBalance = kpt.balanceOf(recipient);

        cheats.startPrank(defaultOwner);
        kpt.transfer(recipient, transferAmount);
        cheats.stopPrank();

        uint256 senderNewBalance = kpt.balanceOf(defaultOwner);
        uint256 recipientNewBalance = kpt.balanceOf(recipient);

        // Assert
        assertEq(senderNewBalance, senderOldBalance - transferAmount, "Balanco sender invalido");
        assertEq(recipientNewBalance, recipientOldBalance + transferAmount, "Balanco recipient invalido");
    }

}
