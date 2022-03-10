import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { data } from '../aimag'

const Home: NextPage = () => {
  const [province, setProvince] = useState('')
  const [soum, setSoum] = useState('')
  const [bag, setBag] = useState('')

  const [isProvinceSelected, setIsProvinceSelected] = useState(false)
  const [isSoumSelected, setIsSoumSelected] = useState(false)
  const [isChanging, setIsChanging] = useState(false)

  function handleSubmit() {
    console.log(province, soum, bag)
  }

  function change() {
    setIsChanging(true)
    setIsProvinceSelected(false)
    setSoum('')
    setBag('')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Aimag Sum Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-96 w-96 flex-col rounded-lg border shadow">
        <div className="relative mx-auto h-12 w-full border-0 border-b-2 border-gray-200 bg-white pt-3 pb-2 text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 hover:border-gray-400">
          <select
            className="block w-1/2 appearance-none bg-white"
            defaultValue={'Province'}
            onChange={(e) => {
              setProvince(e.target.value)
              setIsProvinceSelected(true)
              province != null && change
            }}
          >
            <option value={'Province'} disabled>
              Province
            </option>
            {data.map((aimag, i) => {
              return (
                <option key={i} value={`${aimag.name}`}>
                  {aimag.name}
                </option>
              )
            })}
          </select>
        </div>

        <div className="relative mx-auto h-12 w-full border-0 border-b-2 border-gray-200 bg-white pt-3 pb-2 text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 hover:border-gray-400">
          <select
            className="block w-1/2 appearance-none bg-white"
            defaultValue={'Soum'}
            onChange={(e) => {
              setSoum(e.target.value)
              setIsSoumSelected(true)
            }}
          >
            <option value={'Soum'} disabled>
              Soum
            </option>
            {isProvinceSelected &&
              data.map((aimag) => {
                return (
                  aimag.name == province &&
                  aimag.sum.map((item, i) => {
                    return (
                      <option key={i} value={`${item.name}`}>
                        {item.name}
                      </option>
                    )
                  })
                )
              })}
          </select>
        </div>

        <div className="relative mx-auto h-12 w-full border-0 border-b-2 border-gray-200 bg-white pt-3 pb-2 text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 hover:border-gray-400">
          <select
            className="block w-1/2 appearance-none bg-white"
            defaultValue={'Bag'}
            onChange={(e) => {
              setBag(e.target.value)
              setIsSoumSelected(true)
            }}
          >
            <option value={'Bag'} disabled>
              Bag
            </option>
            {isSoumSelected &&
              data.map((aimag) => {
                return (
                  aimag.name == province &&
                  aimag.sum.map((item, i) => {
                    return (
                      item.name == soum &&
                      item.bag.map((x, i) => {
                        return (
                          <option key={i} value={`${x}`}>
                            {x}
                          </option>
                        )
                      })
                    )
                  })
                )
              })}
          </select>
        </div>
        <button className='bg-gray-200 border-2 text-gray-600 w-32 px-4 py-2 rounded-lg m-auto hover:border-gray-400 ' type="submit" onClick={handleSubmit}>
          Click me
        </button>
      </div>
    </div>
  )
}

export default Home
