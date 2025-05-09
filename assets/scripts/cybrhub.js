document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search');
    const tagButtons = document.querySelectorAll('.tag-btn'); // Make sure selector matches class name
    const cards = document.querySelectorAll('.card');

    let activeTag = null;

    // Typing Animation (optional)
    const typingText = "CyberSec Hub";
    let index = 0;
    const title = document.getElementById('title');
    if (title) {
        title.textContent = "";
        const typingInterval = setInterval(() => {
            if (index < typingText.length) {
                title.textContent += typingText[index];
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
    }

    // Clock Display (optional)
    const clock = document.getElementById('clock');
    if (clock) {
        setInterval(() => {
            clock.textContent = new Date().toLocaleTimeString();
        }, 1000);
    }

    // SEARCH FILTER LOGIC
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();

            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                const matchesSearch = text.includes(query);
                const matchesTag = activeTag ? card.getAttribute('data-tags')?.split(' ').includes(activeTag) : true;

                card.style.display = (matchesSearch && matchesTag) ? 'block' : 'none';
            });
        });
    }

    // TAG FILTER LOGIC
    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tag = button.dataset.tag;

            // Deselect all tags
            tagButtons.forEach(btn => btn.classList.remove('bg-green-500', 'text-black'));

            if (activeTag === tag) {
                activeTag = null; // deselect
            } else {
                activeTag = tag;
                button.classList.add('bg-green-500', 'text-black');
            }

            // Reapply both filters
            const query = searchInput.value.toLowerCase();

            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                const matchesSearch = text.includes(query);
                const cardTags = card.getAttribute('data-tags')?.split(' ') || [];
                const matchesTag = activeTag ? cardTags.includes(activeTag) : true;

                card.style.display = (matchesSearch && matchesTag) ? 'block' : 'none';
            });
        });
    });

    // Accordion Behavior for Main Cards (Top-Level Only)
    const topLevelDetails = document.querySelectorAll('#sections > .card > details');

    topLevelDetails.forEach(detail => {
        const summary = detail.querySelector('summary');
        if (!summary) return;

        summary.addEventListener('click', (e) => {
            if (e.target !== summary) return;

            e.preventDefault();

            topLevelDetails.forEach(d => {
                if (d !== detail) d.open = false;
            });

            detail.open = !detail.open;
        });
    });

    // Handle Nested Details Separately
    const nestedDetails = document.querySelectorAll('#sections .card details details');

    nestedDetails.forEach(nestedDetail => {
        const nestedSummary = nestedDetail.querySelector('summary');
        if (!nestedSummary) return;

        nestedSummary.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();

            nestedDetail.open = !nestedDetail.open;
        });
    });
});