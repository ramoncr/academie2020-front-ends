using Quizy.Data;
using Quizy.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorQuizy.Services
{
    public class ParticipantService
    {
        private readonly ApplicationDbContext dbContext;
        public ParticipantService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        public IReadOnlyCollection<Participant> Items => dbContext.Participants.ToArray();

        public void Add(Participant item)
        {
            dbContext.Participants.Add(item);
            dbContext.SaveChanges();
        }

        public void Delete(Participant item)
        {
            dbContext.Participants.Remove(item);
            dbContext.SaveChanges();
        }
    }
}
