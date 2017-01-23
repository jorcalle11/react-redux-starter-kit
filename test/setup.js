import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'
import { jsdom } from 'jsdom'

chai.use(chaiEnzyme(),sinonChai)

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView

global.navigator = {
  userAgent: 'node.js'
}
