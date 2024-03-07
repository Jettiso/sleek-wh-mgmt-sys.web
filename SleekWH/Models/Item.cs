


namespace SleekWH.Models
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        public int InventoryStatus { get; set; }
        public string SerialId { get; set; } = string.Empty;
        public string Picker { get; set; } = string.Empty;
    }
}