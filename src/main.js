import './sass/styles.scss';

import { obsIntersection } from './helpers/utils';
import navIntersecHelper from './handlers/navIntersectionHelper';
import formSubmitHandler from './handlers/formSumbithandler';

// constants values
const NAV_INTERSECTION_THRESHOLD = 0.2;

// DOM elements
const intersrctionAnchor = document.querySelector('.hero');
const heroForm = document.getElementById('hero__form');

// Intersection Observer
obsIntersection(intersrctionAnchor, NAV_INTERSECTION_THRESHOLD, navIntersecHelper);

// Event Listeners
heroForm.addEventListener('submit', formSubmitHandler);
