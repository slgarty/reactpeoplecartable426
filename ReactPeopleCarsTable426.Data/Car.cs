using Newtonsoft.Json;
using System;

namespace ReactPeopleCarsTable426.Data
{
    public class Car
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int PersonId { get; set; }

        [JsonIgnore]
        public Person Person { get; set; }
    }
}
