// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
library priceConvertor
{
    function getPrice() view internal returns (uint256) 
    {
        AggregatorV3Interface pricefeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        (,int256 ans,,,) = pricefeed.latestRoundData();
        return uint256(ans * 1e8);
    }

    function getconversionrate(uint256 Ethamount) internal view returns (uint256) 
    {
        uint256 ethprice = getPrice();
        uint256 ETH_TOTAL = (ethprice*Ethamount) / 1e18;
        return ETH_TOTAL;
    }
}