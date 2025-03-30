import React from 'react'
import { CustomButton } from './components/ui/Button';
import CustomInput from './components/ui/input';
import LiveStreamCard from './components/ui/LiveStreamCard';

function App() {
  return (
    <>
      <CustomButton>Button</CustomButton>
      <CustomInput />
      <LiveStreamCard title={'hello'} channel={'hello'} thumbnail={'hello'} viewerCount={0} />
    </>
  )
}

export default App