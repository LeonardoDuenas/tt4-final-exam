using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Expense
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Expense description is required")]
        [StringLength(100)]
        public string Description { get; set; }

        [Required(ErrorMessage = "Expense amount is required")]
        public decimal Amount { get; set; }

        [Required(ErrorMessage = "Expense date is required")]
        public DateTime Date { get; set; }

        [Required(ErrorMessage = "Expense category is required")]
        [StringLength(100)]
        public string Category { get; set; }
    }
}