import { PieChart } from '@mui/x-charts/PieChart'
const Chartscomponent = () => {
  return (
    <div className='w-full h-auto flex items-center justify-center '>
      <div className='w-[1000px] h-96 my-10'>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 200, label: 'Front end' },
                { id: 1, value: 150, label: 'Back end' },
                { id: 2, value: 100, label: 'Graphic design' }
              ]
            }
          ]}
        />
      </div>
    </div>
  )
}

export default Chartscomponent
