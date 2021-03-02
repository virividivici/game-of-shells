import React from 'react'
import { shallow, mount } from 'enzyme'
import TheGameOfShells from './index'
import styles from './index.module.scss'

describe('TheGameOfShells', () => {
    it('renders game', () => {
      const wrapper = mount(<TheGameOfShells />)
  
      const playBtn = wrapper.find(`.${styles.playBtn}`)
      expect(playBtn).toHaveLength(1)

    })
  })




describe('TheGameOfShells', () => {
    let wrapper
    const playGame = jest.fn()
    
  
    beforeEach(() => {
      wrapper = shallow(<TheGameOfShells  />)
    })
  
    it('renders a TheGameOfShells and finds play btn', () => {
      const component = wrapper.find(`.${styles.playBtn}`)
      expect(component).toExist()
    })
  
    
  
    describe('when I click the play ', () => {
      it('shuffles answers', () => {
        const play = wrapper.find(`.${styles.playBtn}`)
        play.simulate('click')
        expect(playGame).toHaveBeenCalled()
      })
    })
  })
  