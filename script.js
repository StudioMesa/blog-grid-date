document.addEventListener('DOMContentLoaded', function() {
    // Array of month names for conversion
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Select all blog date elements on the grid
    var gridCardDates = document.querySelectorAll('time.blog-date');
    
    gridCardDates.forEach(function(dateElement) {
        var dateText = dateElement.innerText; // e.g., "4/2/24"
        var dateParts = dateText.split('/'); // Split the date text by '/'
        
        if (dateParts.length === 3) {
            // Convert the month number to month name, adjusting for array index starting at 0
            var monthName = months[parseInt(dateParts[0], 10) - 1];
            
            // Convert year from "YY" to "YYYY" format, assuming 2000s
            var year = parseInt(dateParts[2], 10);
            year += (year < 100) ? 2000 : 0;
            
            // Construct the new date string in "Apr 2, 2024" format
            var formattedDate = `${monthName} ${parseInt(dateParts[1], 10)}, ${year}`;
            
            // Update the element's innerText with the new date format
            dateElement.innerText = formattedDate;
        }
    });
});
