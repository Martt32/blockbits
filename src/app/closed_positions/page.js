import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const  positions = [
    {
      pair:'Wif',
      created:'16 days',
      invested: 21,
      current:6.7,
      ROI:32.12,
      PNL:'+0.2',
      status:'waiting'
    },{
      pair:'Winston',
      created:'21 h',
      invested: 6.7,
      current:21,
      ROI:24,
      PNL:'+0.2',
      status:'waiting'
    },{
      pair:'Daddy',
      created:'3 mins',
      invested: 21,
      current:6.7,
      ROI:32.12,
      PNL:'+0.2',
      status:'waiting'
    },{
      pair:'Winston',
      created:'21 h',
      invested: 6.7,
      current:21,
      ROI:24,
      PNL:'+0.2',
      status:'TP Selling'
    },{
      pair:'Borpa',
      created:'12 days',
      invested: 21,
      current:0.2,
      ROI:2.12,
      PNL:'+0.2',
      status:'TP Selling'
    },{
      pair:'JitoSOL',
      created:'12 days',
      invested: 21,
      current:6.7,
      ROI:12,
      PNL:'-0.2',
      status:'SP Selling'
    },{
      pair:'Daddy',
      created:'3 mins',
      invested: 21,
      current:6.7,
      ROI:32.12,
      PNL:'+0.2',
      status:'TP Selling'
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
      </div> */}
      <div style={{ position:'fixed', top:'0%' }} className="flex justify-between p-2 w-full">

      <div className="bg-black p-4 flex items-center">
        <div className='flex mx-4'>
          <p className='font-bold text-2xl'>BlockBit</p>    
          <Image src='/solana.png' alt='' width={40} height={40} priority/>
        </div>
        <Link href='/'>
        <p className="p-2 cursor-pointer text-grandson hover:text-white">Pending pool</p>
        </Link>
        <Link href='/open_positions'>
        <p className="p-2 cursor-pointer hover:text-white text-grandson">Open positions</p>
        </Link>
        <Link href='/closed_positions'>
        <p className="p-2 cursor-pointer hover:text-grandson :text-white">Closed positions</p>
        </Link>
        <Link href='/settings'>
        <p className="p-2 cursor-pointer text-grandson hover:text-white">Settings</p>
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <div style={{ background: 'linear-gradient(85deg, #0039a6, #17b169)'}} className="cursor-pointer flex space-x-6 items-center w-auto h-1/2 p-2 rounded-lg">
        <div>
          <p className="text-sm">Purchase premium</p>
        </div>  
        <Image src='/crown.png' alt='' width={25} height={25} priority/>
        </div>
        <div style={{ border:'2px gray solid' }} className="flex space-x-2 h-1/2 justify-center items-center m-2 p-1 px-2 rounded-lg">
          <p >786.9</p>
          <Image src='/solana.png' alt='' width={40} height={40} priority/>
        </div>
        <div style={{ border:'2px gray solid' }} className="flex h-1/2 justify-center items-center p-2 m-2 bg-gray rounded-full" >
          <p >64ec2c...c898</p>
        </div>
        <Image src='/solana.png' alt='' width={60} height={60} priority/>
      </div>
      </div>

      <div className="relative flex flex-col  before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="py-4">
          <p className="font-bold text-white">Closed positions</p>
          <p className="text-sm text-grandson font-bold">Presenting your closed position, updated in real-time</p>
        </div>
        <div className="p-2 flex justify-between">

        <select style={{ border:'2px gray solid' }} className="bg-transparent w-auto rounded-full p-1 cursor-pointer">
          <option value='filter '>filter</option>
          
        </select>
        <p className='text-grandson'>Closed Positions PNL:177 SOL</p>
        </div>
        <div>
          {
            //pair list
          }
          <table className="bg-black p-4">
            <thead className='text-grandson text-sm'>
              <th style={{ width:'10vw' }} className='p-4 text-sm text-start py-4'>
                pair
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                created
              </th>
              <th style={{ width:'20vw' }} className='w-auto text-start text-sm py-4'>
                invested
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                sold
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                ROI
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                PNL
              </th>
            </thead>
            <tbody className="p-4">
              {positions.map((position, index) => (
              <tr key={index} className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex space-x-2'>

                  <Image src='/solana.png' alt='' width={25} height={25} priority/>
                  <p>{position.pair}</p>
                  </div>
                </td>
                <td>
                  <p>{position.created}</p>
                </td>
                <td className='flex items-center space-x-2 py-6'>
                <div className='flex items-center'>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>{position.invested}</p> 
                </div>
                </td>
                <td>
                <div className='flex items-center'>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>{position.current}</p> 
                </div>
                </td>
                <td className={`${position.ROI === 12 ? 'text-red' : 'text-green'}`}>
                  <p className=' font-bold'>{position.ROI}</p>
                </td>
                <td>
                <div className={`flex items-center ${position.status === 'SP Selling' ? 'text-red' : 'text-green'}`}>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>{position.PNL}</p> 
                </div>
                </td>
                <td className='text-white p-4'>
                <Image className='text-white' src='/watch.png' alt='' width={20} height={20} priority/>
                </td>
                <td>
                <Image className='text-white' src='/hide.png' alt='' width={20} height={20} priority/>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>

      </main>
  );
}
