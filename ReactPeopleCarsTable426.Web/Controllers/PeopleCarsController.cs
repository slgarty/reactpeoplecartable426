using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleCarsTable426.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPeopleCarsTable426.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private string _connectionString;

        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }


        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPeople();
        }
        [Route("getperson")]
        public Person GetPerson(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPersonById(id);
        }

        [Route("getCars")]
        public List<Car> GetCars(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCars(id);
        }

        [HttpPost]
        [Route("add")]
        public void Add(Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(person);
        }
        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car car )
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(car);
        }
        [HttpPost]
        [Route("delete")]
        public void Delete(int personId)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCars(personId);
        }

    }
}
