using System.Collections.Generic;

namespace Quizy.Models
{
    public class Question
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }

        public string Video { get; set; }

        public List<Answer> Answers { get; set; }
    }
}
