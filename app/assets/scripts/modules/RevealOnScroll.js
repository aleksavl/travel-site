import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(elm, offset) {
    this.itemsToReveal = elm;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }
  createWaypoints() {
    let that = this;
    this.itemsToReveal.each((i,el) => {
      let currentItem = el;
      new Waypoint({
        element: currentItem,
        handler: ()  =>{
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
