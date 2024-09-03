// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Set initial values
    const basic = 10000;
    const incentive = 1000;
    const hra = 400;
    const meal = 200;

    const pf = 1200;
    const tax = 500;
    const loan = 400;

    // Calculate total earnings and deductions
    const totalEarnings = basic + incentive + hra + meal;
    const totalDeductions = pf + tax + loan;
    const netPay = totalEarnings - totalDeductions;

    // Update the table with calculated values
    document.getElementById("total-earnings").textContent = totalEarnings.toFixed(2);
    document.getElementById("total-deductions").textContent = totalDeductions.toFixed(2);
    document.getElementById("net-pay").textContent = netPay.toFixed(2);
    document.getElementById("net-pay-text").textContent = netPay.toFixed(2);
    document.getElementById("net-pay-words").textContent = numberToWords(netPay);
});

// Function to convert number to words (simplified version)
function numberToWords(num) {
    const a = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const g = ['', 'Thousand'];

    if ((num = num.toString()).length > 9) return 'Over Limit';
    let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{3})(\d{3})$/);
    if (!n) return; let str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + ' Crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' Thousand ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) : '';
    return str || 'Zero';
}
