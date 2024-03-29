import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'

import { money } from '../assets'
// import { CustomButton } from "../components/CustomButton"
import { checkIfImage } from "../utils"
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { useStateContext } from '../context'

function CreateCampaign() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setLoading(true);
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)});
        setLoading(false);
        navigate('/');
      } else {
        alert('Provide a valid image URL');
        setForm({ ...form, image: ''});
      }
    })
    console.log(form);
  }

  return (
    <div className='bg-[#1c1c24] flex justify-center
      items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loadeer...'}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43]
      rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px]
        text-[18px] leading-[38px] text-white'>Start a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} 
        className='w-full mt-[65px] flex flex-col gap-[30px]'>
          <div className='flex felx-wrap gap-[40px]'>
            <FormField 
              labelName="Your Name"
              placeholder="John Doe"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange('name', e)}
            />
            <FormField 
              labelName="Campaign Title"
              placeholder="I'm building a..."
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange('title', e)}
            />
          </div>

            <FormField 
              labelName="Your History"
              placeholder="Write your history"
              isTextArea
              value={form.description}
              handleChange={(e) => handleFormFieldChange('description', e)}
            />

            <div className="w-full flex justify-start
                items-center p-4 bg-indigo-500 rounded-lg">
                <img src={money} alt="money"
                className="w-[40px] h-[40px] object-contain"/>

                <h4 className="font-epilogue font-bold text-[25px]
                text-white ml-[20px]">
                  You will get 90% of the raised amount!
                </h4>
            </div>

            <div className='flex felx-wrap gap-[40px]'>
              <FormField 
                labelName="Goal *"
                placeholder="ETH 0.50"
                inputType="number"
                value={form.target}
                handleChange={(e) => handleFormFieldChange('target', e)}
              />
              <FormField 
                labelName="End Date *"
                placeholder="End Date"
                inputType="date"
                value={form.deadline}
                handleChange={(e) => handleFormFieldChange('deadline', e)}
              />
            </div>

            <FormField 
              labelName="Campaign image *"
              placeholder="Place image URL of your campaign"
              inputType="url"
              value={form.image}
              handleChange={(e) => handleFormFieldChange('image', e)}
            />

            <div className="flex justify-center items-center
              mt-[27px]">
              <CustomButton 
                btnType="submit"
                title="Submit new campaign"
                styles="bg-purple-500 hover:bg-purple-600"
              />
            </div>
      </form>
    </div>
  )
}

export default CreateCampaign