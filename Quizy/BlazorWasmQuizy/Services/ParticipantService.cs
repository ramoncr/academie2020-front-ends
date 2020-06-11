using BlazorWasmQuizy.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWasmQuizy.Services
{
    public class ParticipantService
    {
        public static List<Participant> items = new List<Participant>
        {
            new Participant
            {
                Name="Erik E. van Vliet"
            }
        };

        public IReadOnlyCollection<Participant> Items => items;

        public void Add(Participant item)
        {
            item.Id = items.Count + 1;
            items.Add(item);
        }

        public void Delete(Participant item)
        {
            items.Remove(item);
        }
    }
}
