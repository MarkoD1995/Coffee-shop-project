# Coffee-shop-project

Cofee shop project

On the interface user should have:

    Coffee shop balance.
    Input field with coffee price. Price is number with 2 decimal points.
    Button for coffee ordering.
    Button for customer asking for check.

Starting balance of a coffee shop is $0.00. Default value for the 'Coffee Price' is $5.00, but user can change price manually at any point. The price cannot be changed for already created orders. Profit margin for coffee shop is 39% of order total price.

When users click on 'Order Coffee' new order will be created with status 'In Progress'. Each order will randomly have number of coffees assigned to it (random number between 1 and 100). Total price of orders is calculated by multiplying amount from 'Coffee Price' field with number of coffees that was assigned.

When users click on 'Check' button, coffee shop will get money for the first order that is in the status 'In Progress'. Coffee shop balance will be increased by the profit margin, which is 39% of the total price of order. Status of order will change to 'Completed'.

'Coffee Shop Balance' and input field 'Coffee Price' should be displayed on top of the screen. Buttons for ordering and asking for check should be below them. List of orders should be displayed bellow buttons. One order displays information for number of coffees, total price and status. Each status should have different color: 'In Progress' is blue, 'Completed' is green and 'Unpaid' is red. Everything should be centered on the screen and order information should have font size of 14px. HTML part of program should be in file coffee.html.

Example: Starting account balance is $0.00.

User clicks on 'Order Coffee' button. New 'In Progress' order is created with i.e. 3 coffees. Total price for that order is $15.00 (3 coffees multiplied by base price $5.00). User then manually changes 'Coffee Price' to $1.00 and orders again. Another 'In Progress' order is created with, lets say, 6 coffees this time. Total price for this order is $6.00 (6 coffees for price $1.00).

So far in order list user should have orders with following info:

    3 coffees, total table price $15.00, status 'In Progress'
    6 coffees, total price $6.00 with status 'In Progress'.

After user clicks on 'Check' button, the first order status will change to 'Completed' and shop balance will increase by profit margin for that table (39% of $15.00), which is $5.85.

If user clicks on 'Check' button again, status of next 'In Progress' order will be changed to 'Completed' and shop balance will increase by profit margin for that table (39% of $6.00),

which is $2.34. That will be added to previous balance and total amount will be $8.19.

    Every 3rd order will break a single coffee cup, in which case coffee shop balance will be reduced by $3.72.

    For every 5th order bartender will be unhappy with his tip and take random amount between 10 and 30 percent of profit for himself.

    Every 10 seconds one table will be left unpaid. That can happen for any random 'In Progress' order. In that case coffee price reduced by the profit margin will be deducted from the coffee shop account. That order will change status to 'Unpaid'.
