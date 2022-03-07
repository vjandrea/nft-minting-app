// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract SweetPuppies is Ownable, Pausable {
  constructor() {
    _pause();
  }

  function isActive() public view returns (bool) {
    return ! paused();
  }

  function activate() public onlyOwner {
    _unpause();
  }
}
