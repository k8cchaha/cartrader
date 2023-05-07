import cars from '@/data/cars.json'

export default defineEventHandler((event) => {
  const { q = ''} = getQuery(event)
  return cars.filter((car)=>{
    return car.name.toLowerCase().includes(q.toLowerCase())
  })
})