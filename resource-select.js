// Get the select element and the image elements
const resourceSelect = document.getElementById('resource_id');
const resPartyImage = document.getElementById('res_party');
const resPenImage = document.getElementById('res_pen');
const resCamImage = document.getElementById('res_cam');
const resLanImage = document.getElementById('res_lan');
const resGalImage = document.getElementById('res_gal');
const resMerImage = document.getElementById('res_mer');

// Add click event listeners to the image elements
resPartyImage.addEventListener('click', () => {
  updateResourceSelect('206667');
});

resPenImage.addEventListener('click', () => {
  updateResourceSelect('104777');
});

resCamImage.addEventListener('click', () => {
  updateResourceSelect('105032');
});

resLanImage.addEventListener('click', () => {
  updateResourceSelect('105033');
});

resGalImage.addEventListener('click', () => {
  updateResourceSelect('105572');
});

resMerImage.addEventListener('click', () => {
  updateResourceSelect('105573');
});

// Helper function to update the resource select element
function updateResourceSelect(value) {
  resourceSelect.value = value;
  triggerOnChangeEvent(resourceSelect);
}

// Helper function to trigger the onchange event
function triggerOnChangeEvent(element) {
  const event = new Event('change', { bubbles: true });
  element.dispatchEvent(event);
}