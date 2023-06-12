import React, { useState } from 'react';
import { FakeDataCardsInfo } from '../fake data';
import Cards from './Cards';
import TextField from './form/TextField';
import ButtonWithIcon from './form/ButtonWithIcon';

import store from './store';
import { useSelector } from 'react-redux';
import { searchingLocation, searchingName, freeDelivery, choosePaymentMethod, searchRate } from './store';

const Filters = () => {

  const options = [
    { name: "Paypal", id: "paypal" },
    { name: "Visa", id: "visa" },
    { name: "Credit Card", id: "creditCard" },
  ];
  
  const [expandPay, setExpandPay] = useState(false);
  const [expandRate, setExpandRate] = useState(false);
    
  const location = useSelector(state => state.searchLocation)
  const name = useSelector(state => state.searchName)
  const delivery = useSelector(state => state.freeDelivery)
  const paymentMethod = useSelector(state => state.paymentMethod)
  const rateValue = useSelector(state => state.rateValue)

  const handleSearch = ( card ) => {
    if (location === "" && name === "" && delivery === null && paymentMethod === '' && (rateValue === (null) || rateValue === (0))) {
      return card;
    } else if (card.location.toLowerCase().includes(location) && location !== '') {
      console.log('pass location')
      console.log("Initial State ", store.getState())
      return card;
    } else if (card.name.toLowerCase().includes(name) && name !== '') {
      console.log('pass name')
      return card;
    } else if (delivery === !Boolean(card.delivery)) {
      console.log('pass free')
      return card;
    } else if (paymentMethod === card.paymentMethod) {
      return card;
    } else if (Number(Number(rateValue).toFixed(1)) === Number(Number(card.rate).toFixed(1))) {
      return card;
    } else {
      return false;
    }
  }

  return (
    <section className='flex flex-col flex-wrap items-center justify-center gap-3 pt-6 blue'>

      {/* Input Search By Location */}
      <div className='px-6 sm:px-16 w-full flex justify-center'>
        <div className='py-2 px-4 rounded-2xl font-bold text-white bg-gray-900 w-full xs:max-w-[250px]' >

          <TextField name='location' id='location' placeholder='العنوان' styles='bg-gray-900 focus:text-start placeholder:text-white text-center'
            onChange={(e) => store.dispatch(searchingLocation(e.target.value))}
          />

        </div>
      </div>

      {/* Input Search By Name */}
      <div className='px-6 sm:px-16 w-full flex justify-center'>
        <div className='py-2 px-4 rounded-full font-bold text-gray-600 bg-white w-full xs:max-w-[250px] shadow-sm shadow-slate-50' >
          
          <TextField name='name' id='name' placeholder='ابحث عن مطعمك المفضل' styles='placeholder:text-gray-400 placeholder:font-light'
            onChange={(e) => store.dispatch(searchingName(e.target.value))}
          />

        </div>
      </div>

      <div className='flex flex-row items-center justify-center gap-4 select-none max-w-full'>
        <div className='flex flex-row flex-wrap items-center justify-center gap-1 xs:gap-3'>

        {/* Free Delivery */}
        <p className={`min-w-[110px] max-w-[130px] h-[42px] flex flex-1 items-center justify-center p-2 rounded-full border border-gray-500 cursor-pointer font-bold ${delivery ? 'bg-green-600 text-white' : 'bg-teal-50 text-teal-900'}`}
          onClick={() => store.dispatch(freeDelivery(!delivery))}
        >
          توصيل مجاني</p>


        {/* The Rate */}
        <div className='relative'>
          <ButtonWithIcon title='التقييم' icon='star' onClick={() => {setExpandRate(!expandRate); setExpandPay(false)}} />
          <input
            className={`${expandRate ? 'flex flex-col absolute top-[120%] left-1/2 -translate-x-1/2 z-50 bg-teal-50 text-gray-600 border border-gray-500 w-[115px] outline-none rounded-lg p-2' : 'hidden'}`}
            onChange={(e) => store.dispatch(searchRate(Number(e.target.value)))}
            type="number"
            name="rate"
            id="rate"
            min={ 0 }
            max={ 5 }
            step={ 0.1 }
          />
        </div>

        {/* Payment Methods */}
        <div className='relative'>
          <ButtonWithIcon styles='min-w-[140px] h-[42px]' title='طرق الدفع' icon='card' onClick={() => {setExpandPay(!expandPay); setExpandRate(false)}} />
          <div className={`${expandPay ? `flex flex-col absolute top-[120%] left-1/2 -translate-x-1/2 z-50 bg-teal-50 text-gray-600 border border-gray-500 w-[140px] rounded-lg p-2` : 'hidden'}`}>
            {
              options.map(( option ) => (
                <p key={ option.id } className='py-1 px-2 hover:bg-green-600 hover:text-white rounded-lg cursor-pointer'
                  onClick={() => {store.dispatch(choosePaymentMethod(option.id)); setExpandPay(!expandPay)}}
                >
                  { option.name }
                </p>
              ))
            }
          </div>
        </div>

        </div>
      </div>


      <section className="flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-8 pb-2 overflow-hidden px-6 sm:px-16">
      {
        FakeDataCardsInfo.filter((card) => handleSearch( card )).map(( item ) => {
          return (
            // Cards Component
            <Cards key={ item.id } name={ item.name } img={ item.img } paymentMethod={ item.paymentImg} rate={ item.rate } time={ item.time } delivery={ item.delivery } lowest={ item.lowest } />
          )
        })
      }
      </section>
    </section>
  )
}

export default Filters;

