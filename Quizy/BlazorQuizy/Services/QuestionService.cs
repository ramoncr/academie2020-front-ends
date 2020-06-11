using Microsoft.EntityFrameworkCore;
using Quizy.Data;
using Quizy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorQuizy.Services
{
    public class QuestionService
    {
        private readonly ApplicationDbContext dbContext;
        public QuestionService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public IReadOnlyCollection<Question> Items => dbContext.Questions.Include(q=>q.Answers).ToArray();

        public void Add(Question item)
        {
            dbContext.Questions.Add(item);
            dbContext.SaveChanges();
        }

        public void Delete(Question item)
        {
            dbContext.Questions.Remove(item);
            dbContext.SaveChanges();
        }
    }
}
