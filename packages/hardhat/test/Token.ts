// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/utils/Nonces.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract UAVToken is ERC20, ERC20Permit, ERC20Votes, Ownable2Step {
    using EnumerableSet for EnumerableSet.AddressSet;

    address public admin;
    bool public mintBlocked;
    EnumerableSet.AddressSet private _blockList;

    event MintBlocked();
    event AdminChanged(address indexed oldAdmin, address indexed newAdmin);
    event AddressBlocked(address indexed blockedAddress);
    event AddressUnblocked(address indexed unblockedAddress);

    error EnforceMintBlocked();
    error UnauthorizedAdminAction(address account);
    error UnauthorizedUserAction(address account);

    modifier whenMintIsAllowed() {
        if (mintBlocked) {
            revert EnforceMintBlocked();
        }
        _;
    }

    modifier onlyAdmin() {
        if (msg.sender != admin) {
            revert UnauthorizedAdminAction(msg.sender);
        }
        _;
    }

    modifier whenNotBlocked(address from) {
        if (_blockList.contains(from)) {
            revert UnauthorizedUserAction(msg.sender);
        }
        _;
    }

    constructor(
        string memory name,
        string memory symbol,
        address ownerAddress
    ) ERC20(name, symbol) ERC20Permit(name) Ownable2Step(ownerAddress) {}

    function clock() public view override returns (uint48) {
        return uint48(block.timestamp);
    }

    function CLOCK_MODE() public pure override returns (string memory) {
        return "mode=timestamp";
    }

    function blockListLength() external view returns (uint256) {
        return _blockList.length();
    }

    function blockListAt(uint256 index) external view returns (address) {
        return _blockList.at(index);
    }

    function _update(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) whenNotBlocked(from) {
        super._update(from, to, amount);
    }

    function nonces(address owner) public view virtual override(ERC20Permit, Nonces) returns (uint256) {
        return super.nonces(owner);
    }

    function mint(address to, uint256 amount) external virtual onlyOwner whenMintIsAllowed {
        _mint(to, amount);
    }

    function changeAdmin(address newAdmin) external virtual onlyOwner {
        address oldAdmin = admin;
        admin = newAdmin;
        emit AdminChanged(oldAdmin, newAdmin);
    }

    function blockMint() external virtual onlyOwner whenMintIsAllowed {
        mintBlocked = true;
        emit MintBlocked();
    }

    function blockAddress(address addressToBeBlocked) external virtual onlyAdmin {
        _blockList.add(addressToBeBlocked);
        emit AddressBlocked(addressToBeBlocked);
    }

    function unblockAddress(address addressToBeUnblocked) external virtual onlyAdmin {
        _blockList.remove(addressToBeUnblocked);
        emit AddressUnblocked(addressToBeUnblocked);
    }
}
