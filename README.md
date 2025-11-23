What we are trying to do here is create a simple pay dApp that allows a user to send payment (in any erc20 token) to multiple other users in a single transaction. This is useful for payroll, airdrops, or any other situation where you need to send the different amounts of tokens to multiple recipients.

- User connects their wallet (connect wallet button using rainbowkit) ✅
- User selects an ERC20 token to pay with(there is a dropdown that fetches all the erc20 tokens the user has in their wallet):✅
    - Drop down list.✅
    - Token symbol and logo shown in the dropdown list.✅
- User inputs a list of recipient addresses and the amount to send to each address (there are multiple input areas where the user can add more recipients. the amount input area is beside each recipient input area)✅
- User clicks "Pay" button✅

Quality of Life Features:
- Validate recipient addresses and amounts before allowing the user to submit the transaction✅
- Show estimated gas fees before submitting the transaction
- Show transaction status (pending, success, failure) after submission✅
- Create a small toggle button to switch between light and dark mode for better user experience✅
- Responsive design to ensure usability on both desktop and mobile devices✅
- Have a toggle button to switch between paying in ETH or ERC20 tokens✅
- Have a search bar in the header to search for specific ERC20 tokens when selecting the token to pay with

Needs To Be Fixed:
- Logo should be the Base logo at both the top righ hand corner and the metadata (I will provide the svg in the assets folder)
- Both connect buttons should follow the base colour code which is rgba(0,0,255,1) - this should apply to chain and account displays
- Replace the "Hyper-Optimized Payments Text" with "BasePay " " [Logo]". The colour of this should be rgba(0,0,255,1)
- Bottom connect button should return to previous state after 10 seconds aftertransaction is completed (or failed).