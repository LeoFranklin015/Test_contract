// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    uint256 public minamt = 50;

    function fundme() public payable 
    {
        require(getconversionrate(msg.value) > minamt, "IT isn't enough!");
    }

    function getPrice() view public returns (uint256) 
    {
        AggregatorV3Interface pricefeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        (,int256 ans,,,) = pricefeed.latestRoundData();
        return uint256(ans * 1e8);
    }

    function getconversionrate(uint256 Ethamount) view public returns (uint256) 
    {
        uint256 ethprice = getPrice();
        uint256 ETH_TOTAL = (ethprice*Ethamount) / 1e18;
        return ETH_TOTAL;
    }
}
