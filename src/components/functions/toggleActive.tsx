function toggleActive(target: HTMLDivElement, tag: string): void {
  target.classList.contains(tag)
    ? target.classList.remove(tag)
    : target.classList.add(tag);
}

export default toggleActive;
