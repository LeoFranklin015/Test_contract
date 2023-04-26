// SPDX-License-Identifier: MIT 
pragma solidity >=0.8.2 <0.9.0; 
/** * @title Storage * @dev Store & retrieve value in a variable * @custom:dev-run-script ./scripts/deploy_with_ethers.ts */ 
contract Storage { 
    struct Students 
    { 
        string name; 
        uint256 rollno; 
    } 
    Students [] public studnetArray; 
    function studdetails (uint256 _rollno, string memory _name) public 
    {
         studnetArray.push(Students(_name,_rollno)); 
         rollnotoname[_rollno]=_name; 
    } 

    function marks (uint mark) public 
    {
        
    }
    mapping (uint256 => string ) public rollnotoname ; 
    }