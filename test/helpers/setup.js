import { jsdom } from 'jsdom';

const baseMarkup = '<!DOCTYPE html><html><head></head><body></body></html>';
const window = jsdom(baseMarkup).defaultView;

global.window = window;
global.document = window.document;
global.navigator = window.navigator;
