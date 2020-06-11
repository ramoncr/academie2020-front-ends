namespace Quizy.Models
{
    public class Participant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Score { get; set; } = 0;
        public int QuestionsAnswered { get; set; } = 0;
    }
}
