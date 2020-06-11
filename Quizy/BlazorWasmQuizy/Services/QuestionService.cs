using BlazorWasmQuizy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWasmQuizy.Services
{
    public class QuestionService
    {
        public static  List<Question> items = new List<Question>
        {
            new Question {
                Id=1,
                Description="What is één plus één?",
                Content="Wat is 1+1?",
                Video="https://www.youtube.com/embed/7D4K9oi7oBM",

                Answers=new List<Answer>
                {
                    new Answer{Id=1,Text="1",Score=10},
                    new Answer{Id=2,Text="2",Score=50},
                    new Answer{Id=3,Text="3",Score=10}
                }
            },
             new Question {
                Id=1,
                Description="Wat is de eerste letter van het alfabet?",
                Content="Kies maar een letter",
                Image="https://media.nbcmiami.com/2019/09/abcblocks.gif",
                Answers=new List<Answer>
                {
                    new Answer{Id=1,Text="D",Score=10},
                    new Answer{Id=2,Text="A",Score=50},
                    new Answer{Id=3,Text="B",Score=10}
                }
            }
        };

        public IReadOnlyCollection<Question> Items => items;

        public void Add(Question item)
        {
            item.Id = items.Count + 1;
            items.Add(item);
        }

        public void Delete(Question item)
        {
            items.Remove(item);
        }
    }
}
