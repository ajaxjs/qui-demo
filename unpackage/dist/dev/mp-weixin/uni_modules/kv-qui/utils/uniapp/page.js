"use strict";
function currentPage() {
  let pages = getCurrentPages();
  pages.reverse();
  return pages[0];
}
function page(pi) {
  let pages = getCurrentPages();
  if (parseInt(pi) !== NaN) {
    pages = pages[pi >= 0 ? pi : pages.length + pi];
  }
  return pages;
}
exports.currentPage = currentPage;
exports.page = page;
