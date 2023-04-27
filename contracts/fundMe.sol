// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./priceConvertor.sol";

contract FundMe {
    using priceConvertor for uint256;
    uint256 public minamt = 50;
    address[] public funders;

    mapping(address => uint256) public addrtofund;
    function fundme() public payable 
    {
        require(msg.value.getconversionrate() > minamt, "IT isn't enough!");
        funders.push(msg.sender);
        addrtofund[msg.sender]=msg.value;
    }

    
}
