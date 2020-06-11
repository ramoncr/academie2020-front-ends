using Quizy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorQuizy.Models
{
    public class AppData
    {
        public event Action? Changed;
        private Participant? participant;

        public Participant? Participant
        {
            get => participant;
            set { 
                participant = value;
                Changed?.Invoke();
            }
        }
        public bool IsAdmin { get; set; }
    }
}
