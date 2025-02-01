<script>
import { computed, defineComponent } from 'vue';
export default defineComponent({
    name: 'Global-Button',
    props: {
        /**
         * Size of the button.
         * @type {'xs' | 'sm' | 'base'}
         * @default 'base'
         * @validator sizeValidator
         */
        size: {
            type: String,
            default: 'base',
            validator: (value) => [
                'xs', 
                'sm', 
                'base', 
            ].includes(value),
        },
        /**
         * Color of the button.
         * @type {'primary' | 'secondary' | 'toggle' | 'confetti' }
         * @default 'primary'
         * @validator colorValidator
         */
        color: {
            type: String,
            default: 'primary',
            validator: (value) => [
                'primary',
                'secondary',
                'toggle',
                'confetti',
            ].includes(value),
        },
        /**
         * Emphasis of the button.
         * @type {'bold' | 'subtle' | 'tonal' | 'ghost' | 'link'}
         * @default 'bold'
         * @validator emphasisValidator
         */
        emphasis: {
            type: String,
            default: 'bold',
            validator: (value) => [
                'bold',
                'subtle',
                'tonal',
                'ghost',
                'link',
            ].includes(value),
        },
        /**
         * Shape of the button.
         * @type {'rectangle' | 'rounded'}
         * @default 'rectangle'
         * @validator shapeValidator
         */
        shape: {
            type: String,
            default: 'rectangle',
            validator: (value) => [
                'rectangle', 
                'rounded',
            ].includes(value),
        },
        /**
         * Whether the button contains only an icon.
         * @type {Boolean}
         * @default false
         */
        iconOnly: {
            type: Boolean,
            default: false,
        },
        /**
         * Type of the button.
         * @type {'button' | 'a' | 'router-link'}
         * @default 'button'
         * @validator typeValidator
         */
        type: {
            type: String,
            default: 'button',
            validator: (value) => [
                'button', 
                'submit', 
                'reset'
            ].includes(value),
        },
        /**
         * Whether the button is disabled.
         * @type {Boolean}
         * @default false
         */
        disabled: {
            type: Boolean,
            default: false,
        },
        /**
         * HTML tag or Vue Router link tag to render the button as.
         * @type {'button' | 'a' | 'router-link'}
         * @default 'button'
         * @validator asValidator
         */
        as: {
            type: String,
            default: 'button',
            validator: (value) => [
                'button', 
                'a', 
                'router-link'
            ].includes(value),
        },
        /**
         * Target URL for the button when using 'router-link' as the 'as' prop.
         * @type {String}
         * @default ''
         */
        to: {
            type: String,
            default: '',
        },
    },
    emits: ['click'],
    setup(props, { emit }) {
        
        /**
         * Computed class name based on props.
         * @returns {Array}
         */
        const className = computed(() => ([
            'button',
            `button--size-${props.size}`,
            `button--color-${props.color}`,
            `button--emphasis-${props.emphasis}`,
            `button--shape-${props.shape}`,
            props.iconOnly ? 'button--icon-only' : '',
            props.disabled ? 'button--disabled' : '',
        ]));

        /**
         * Method to handle button click event.
         * @param {Event} e - The click event.
         */
        function handleClick(e) {
            emit('click', e);
        }

        return {
            className,
            handleClick,
        };
    },
});
</script>

<template>
    <component
        :is="as"
        :to="to"
        :class="className"
        :type="type"
        :disabled="disabled"
        @click="(e) => $emit('click', e)"
    >   
        <slot />
        
    </component>
</template>

<style scoped lang="scss">
.button { 

    // sizes
    &--size-xs {
        --pp-ui-btn-font-size: 12px;
        --pp-ui-btn-height: 24px;
        --pp-ui-btn-padding-y: 0px;
        --pp-ui-btn-padding-x: var(--spacing-2);
    }

    &--size-sm {
        --pp-ui-btn-font-size: 12px;
        --pp-ui-btn-height: 32px;
        --pp-ui-btn-padding-y: 0px;
        --pp-ui-btn-padding-x: var(--spacing-2);
        --pp-ui-btn-font-weight: 700;
    }

    &--size-base {
        --pp-ui-btn-font-size: 13px;
        --pp-ui-btn-height: 40px;
        --pp-ui-btn-padding-y: 0px;
        --pp-ui-btn-padding-x: var(--spacing-3);
    }

    // Shape and size

    &--shape-rectangle#{&}--size-xs,
    &--shape-rectangle#{&}--size-sm {
        --pp-ui-btn-border-radius: var(--border-radius-sm);
    }

    &--shape-rectangle#{&}--size-base {
        --pp-ui-btn-border-radius: var(--border-radius);
    }

    &--shape-rounded#{&}--size-xs,
    &--shape-rounded#{&}--size-sm,
    &--shape-rounded#{&}--size-base {
        --pp-ui-btn-border-radius: 99999px;
    }

    // Icon only and size

    &--icon-only#{&}--size-xs,
    &--icon-only#{&}--size-sm,
    &--icon-only#{&}--size-base {
        --pp-ui-btn-padding-x: 0px;
        --pp-ui-btn-padding-y: 0px;
    }

    &--icon-only#{&}--size-xs {
        --pp-ui-btn-width: 24px;
        --pp-ui-btn-height: 24px;
    }

    &--icon-only#{&}--size-sm {
        --pp-ui-btn-width: 32px;
        --pp-ui-btn-height: 32px;
    }

    &--icon-only#{&}--size-base {
        --pp-ui-btn-width: 40px;
        --pp-ui-btn-height: 40px;
    }


    // Primary color

    &--color-primary#{&}--emphasis-bold {
        --pp-ui-btn-color: var(--white);
        --pp-ui-btn-background-color: var(--neutral-800);

        --pp-ui-btn-color-hovered: var(--white);
        --pp-ui-btn-color-active: var(--white);
        --pp-ui-btn-color-focused: var(--white);

        --pp-ui-btn-background-color-hovered: var(--neutral-700);
        --pp-ui-btn-background-color-active: var(--neutral-600);
        --pp-ui-btn-background-color-focused: var(--neutral-700);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--neutral-700);
    }

    &--color-primary#{&}--emphasis-subtle {
        --pp-ui-btn-color: var(--neutral-800);
        --pp-ui-btn-background-color: transparent;
        --pp-ui-btn-border-width: 1px;
        --pp-ui-btn-border-color: var(--neutral-800);

        --pp-ui-btn-color-hovered: var(--blue-500);
        --pp-ui-btn-color-active: var(--blue-500);
        --pp-ui-btn-color-focused: var(--blue-500);

        --pp-ui-btn-background-color-hovered: var(--blue-100);
        --pp-ui-btn-background-color-active: var(--blue-200);
        --pp-ui-btn-background-color-focused: var(--blue-100);

        --pp-ui-btn-border-color-hovered: var(--blue-500);
        --pp-ui-btn-border-color-active: var(--blue-500);
        --pp-ui-btn-border-color-focused: var(--blue-500);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--blue-100);
    }

    &--color-primary#{&}--emphasis-tonal {
        --pp-ui-btn-color: var(--blue-500);
        --pp-ui-btn-background-color: var(--blue-100);
        --pp-ui-btn-border-width: 1px;
        --pp-ui-btn-border-color: var(--blue-300);

        --pp-ui-btn-color-hovered: var(--blue-500);
        --pp-ui-btn-color-active: var(--blue-500);
        --pp-ui-btn-color-focused: var(--blue-500);

        --pp-ui-btn-background-color-hovered: var(--blue-200);
        --pp-ui-btn-background-color-active: var(--blue-300);
        --pp-ui-btn-background-color-focused: var(--blue-200);

        --pp-ui-btn-border-color-hovered: var(--blue-400);
        --pp-ui-btn-border-color-active: var(--blue-500);
        --pp-ui-btn-border-color-focused: var(--blue-400);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--blue-400);
    }

    &--color-primary#{&}--emphasis-ghost {
        --pp-ui-btn-color: var(--blue-500);
        --pp-ui-btn-background-color: transparent;

        --pp-ui-btn-color-hovered: var(--blue-500);
        --pp-ui-btn-color-active: var(--blue-500);
        --pp-ui-btn-color-focused: var(--blue-500);

        --pp-ui-btn-background-color-hovered: var(--blue-100);
        --pp-ui-btn-background-color-active: var(--blue-200);
        --pp-ui-btn-background-color-focused: var(--blue-100);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--blue-100);
    }

    &--color-primary#{&}--emphasis-link {
        --pp-ui-btn-color: var(--blue-500);
        --pp-ui-btn-background-color: transparent;

        --pp-ui-btn-color-hovered: var(--blue-600);
        --pp-ui-btn-color-active: var(--blue-600);
        --pp-ui-btn-color-focused: var(--blue-600);

        --pp-ui-btn-background-color-hovered: transparent;
        --pp-ui-btn-background-color-active: transparent;
        --pp-ui-btn-background-color-focused: transparent;

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: transparent;

        --pp-ui-btn-text-decoration: underline;
        --pp-ui-btn-text-decoration-hovered: underline;
        --pp-ui-btn-text-decoration-active: underline;
        --pp-ui-btn-text-decoration-focused: underline;
    }

    // Secondary color

    &--color-secondary#{&}--emphasis-bold,
    &--color-secondary#{&}--emphasis-subtle {
        --pp-ui-btn-color: var(--neutral-800);
        --pp-ui-btn-background-color: var(--white);
        --pp-ui-btn-border-width: 1px;
        --pp-ui-btn-border-color: var(--neutral-400);

        --pp-ui-btn-color-hovered: var(--neutral-800);
        --pp-ui-btn-color-active: var(--neutral-800);
        --pp-ui-btn-color-focused: var(--neutral-800);

        --pp-ui-btn-background-color-hovered: var(--neutral-100);
        --pp-ui-btn-background-color-active: var(--neutral-200);
        --pp-ui-btn-background-color-focused: var(--neutral-100);

        --pp-ui-btn-border-color-hovered: var(--neutral-500);
        --pp-ui-btn-border-color-active: var(--neutral-500);
        --pp-ui-btn-border-color-focused: var(--neutral-500);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--neutral-100);
    }

    &--color-secondary#{&}--emphasis-tonal {
        --pp-ui-btn-color: var(--neutral-800);
        --pp-ui-btn-background-color: var(--neutral-100);
        --pp-ui-btn-border-width: 1px;
        --pp-ui-btn-border-color: var(--neutral-300);

        --pp-ui-btn-color-hovered: var(--neutral-800);
        --pp-ui-btn-color-active: var(--neutral-800);
        --pp-ui-btn-color-focused: var(--neutral-800);

        --pp-ui-btn-background-color-hovered: var(--neutral-200);
        --pp-ui-btn-background-color-active: var(--neutral-300);
        --pp-ui-btn-background-color-focused: var(--neutral-200);

        --pp-ui-btn-border-color-hovered: var(--neutral-400);
        --pp-ui-btn-border-color-active: var(--neutral-500);
        --pp-ui-btn-border-color-focused: var(--neutral-400);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--neutral-400);
    }

    &--color-secondary#{&}--emphasis-ghost {
        --pp-ui-btn-color: var(--neutral-800);
        --pp-ui-btn-background-color: transparent;

        --pp-ui-btn-color-hovered: var(--neutral-800);
        --pp-ui-btn-color-active: var(--neutral-800);
        --pp-ui-btn-color-focused: var(--neutral-800);

        --pp-ui-btn-background-color-hovered: var(--neutral-100);
        --pp-ui-btn-background-color-active: var(--neutral-200);
        --pp-ui-btn-background-color-focused: var(--neutral-100);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--neutral-100);
    }

    &--color-secondary#{&}--emphasis-link {
        --pp-ui-btn-color: var(--neutral-800);
        --pp-ui-btn-background-color: transparent;

        --pp-ui-btn-color-hovered: var(--neutral-600);
        --pp-ui-btn-color-active: var(--neutral-600);
        --pp-ui-btn-color-focused: var(--neutral-600);

        --pp-ui-btn-background-color-hovered: transparent;
        --pp-ui-btn-background-color-active: transparent;
        --pp-ui-btn-background-color-focused: transparent;

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: transparent;

        --pp-ui-btn-text-decoration: underline;
        --pp-ui-btn-text-decoration-hovered: underline;
        --pp-ui-btn-text-decoration-active: underline;
        --pp-ui-btn-text-decoration-focused: underline;
    }

    // confetti color

    &--color-confetti#{&}--emphasis-bold {
        --pp-ui-btn-color: var(--white);
        --pp-ui-btn-background-color: var(--red-500);

        --pp-ui-btn-color-hovered: var(--white);
        --pp-ui-btn-color-active: var(--white);
        --pp-ui-btn-color-focused: var(--white);

        --pp-ui-btn-background-color-hovered: var(--red-600);
        --pp-ui-btn-background-color-active: var(--red-700);
        --pp-ui-btn-background-color-focused: var(--red-600);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--red-600);
    }
    
    &--color-confetti#{&}--emphasis-subtle {
        --pp-ui-btn-color: var(--red-500);
        --pp-ui-btn-background-color: transparent;
        --pp-ui-btn-border-width: 1px;
        --pp-ui-btn-border-color: var(--red-500);

        --pp-ui-btn-color-hovered: var(--red-500);
        --pp-ui-btn-color-active: var(--red-500);
        --pp-ui-btn-color-focused: var(--red-500);

        --pp-ui-btn-background-color-hovered: var(--red-100);
        --pp-ui-btn-background-color-active: var(--red-200);
        --pp-ui-btn-background-color-focused: var(--red-100);

        --pp-ui-btn-border-color-hovered: var(--red-500);
        --pp-ui-btn-border-color-active: var(--red-500);
        --pp-ui-btn-border-color-focused: var(--red-500);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--red-100);
    }

    &--color-confetti#{&}--emphasis-tonal {
        --pp-ui-btn-color: var(--red-500);
        --pp-ui-btn-background-color: var(--red-100);
        --pp-ui-btn-border-width: 1px;
        --pp-ui-btn-border-color: var(--red-300);

        --pp-ui-btn-color-hovered: var(--red-500);
        --pp-ui-btn-color-active: var(--red-500);
        --pp-ui-btn-color-focused: var(--red-500);

        --pp-ui-btn-background-color-hovered: var(--red-200);
        --pp-ui-btn-background-color-active: var(--red-300);
        --pp-ui-btn-background-color-focused: var(--red-200);

        --pp-ui-btn-border-color-hovered: var(--red-400);
        --pp-ui-btn-border-color-active: var(--red-500);
        --pp-ui-btn-border-color-focused: var(--red-400);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--red-400);
    }

    &--color-confetti#{&}--emphasis-ghost {
        --pp-ui-btn-color: var(--red-500);
        --pp-ui-btn-background-color: transparent;

        --pp-ui-btn-color-hovered: var(--red-500);
        --pp-ui-btn-color-active: var(--red-500);
        --pp-ui-btn-color-focused: var(--red-500);

        --pp-ui-btn-background-color-hovered: var(--red-100);
        --pp-ui-btn-background-color-active: var(--red-200);
        --pp-ui-btn-background-color-focused: var(--red-100);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: var(--red-100);
    }

    // toggle
    &--color-toggle#{&}--emphasis-bold {
        --pp-ui-btn-font-weight: 400;

        --pp-ui-btn-color: var(--white);
        --pp-ui-btn-background-color: linear-gradient(135deg, var(--neutral-800) 0%, var(--neutral-800) 0.01%, #9B60E9 100%);
        
        --pp-ui-btn-color-hovered: var(--white);
        --pp-ui-btn-color-active: var(--white);
        --pp-ui-btn-color-focused: var(--white);

        --pp-ui-btn-background-color-hovered: linear-gradient(135deg, var(--neutral-800) 0%, var(--neutral-800) 0.01%, #9B60E9 100%);
        --pp-ui-btn-background-color-active: linear-gradient(135deg, var(--neutral-800) 0%, var(--neutral-800) 0.01%, #9B60E9 100%);
        --pp-ui-btn-background-color-focused: linear-gradient(135deg, var(--neutral-800) 0%, var(--neutral-800) 0.01%, #9B60E9 100%);

        --pp-ui-btn-outline-color-hovered: transparent;
        --pp-ui-btn-outline-color-active: transparent;
        --pp-ui-btn-outline-color-focused: linear-gradient(135deg, var(--neutral-800) 0%, var(--neutral-800) 0.01%, #9B60E9 100%);

        --pp-ui-btn-opacity-hovered: 0.9;
        --pp-ui-btn-opacity-active: 0.8;
        --pp-ui-btn-opacity-focused: 0.9;
    }


    position: var(--pp-ui-btn-position);
    display: var(--pp-ui-btn-display);
    align-items: var(--pp-ui-btn-align-items);
    justify-content: var(--pp-ui-btn-justify-content);
    gap: var(--pp-ui-btn-gap);
    font-size: var(--pp-ui-btn-font-size);
    font-weight: var(--pp-ui-btn-font-weight);
    font-family: var(--pp-ui-btn-font-family) !important;
    padding: var(--pp-ui-btn-padding-y) var(--pp-ui-btn-padding-x);
    height: var(--pp-ui-btn-height);
    width: var(--pp-ui-btn-width);
    border-radius: var(--pp-ui-btn-border-radius);
    text-decoration: var(--pp-ui-btn-text-decoration);
    letter-spacing: var(--pp-ui-btn-letter-spacing);
    color: var(--pp-ui-btn-color);
    background: var(--pp-ui-btn-background-color);
    border-width: var(--pp-ui-btn-border-width);
    border-color: var(--pp-ui-btn-border-color);
    border-style: solid;
    box-sizing: var(--pp-ui-btn-box-sizing);
    cursor: var(--pp-ui-btn-cursor);
    user-select: var(--pp-ui-btn-user-select);
    box-shadow: var(--pp-ui-btn-box-shadow);
    outline-offset: var(--pp-ui-btn-outline-offset);
    outline-width: var(--pp-ui-btn-outline-width);
    outline-color: var(--pp-ui-btn-outline-color);
    transition: var(--pp-ui-btn-transition);
    overflow: var(--pp-ui-btn-overflow);
    opacity: var(--pp-ui-btn-opacity);
    -webkit-font-smoothing: antialiased;

    &:hover:not(:disabled) {
        box-shadow: var(--pp-ui-btn-box-shadow);
        color: var(--pp-ui-btn-color-hovered);
        background: var(--pp-ui-btn-background-color-hovered);
        outline-color: var(--pp-ui-btn-outline-color-hovered);
        text-decoration: var(--pp-ui-btn-text-decoration-hovered);
        border-color: var(--pp-ui-btn-border-color-hovered);
        opacity: var(--pp-ui-btn-opacity-hovered);
    }

    &:active:not(:disabled) {
        box-shadow: var(--pp-ui-btn-box-shadow);
        color: var(--pp-ui-btn-color-active);
        background: var(--pp-ui-btn-background-color-active);
        outline-color: var(--pp-ui-btn-outline-color-active);
        text-decoration: var(--pp-ui-btn-text-decoration-active);
        border-color: var(--pp-ui-btn-border-color-active);
        opacity: var(--pp-ui-btn-opacity-active);
    }

    &:focus-visible:not(:disabled) {
        box-shadow: var(--pp-ui-btn-box-shadow);
        color: var(--pp-ui-btn-color-focused);
        background: var(--pp-ui-btn-background-color-focused);
        outline-color: var(--pp-ui-btn-outline-color-focused);
        text-decoration: var(--pp-ui-btn-text-decoration-focused);
        border-color: var(--pp-ui-btn-border-color-focused);
        opacity: var(--pp-ui-btn-opacity-focused);
    }

    &:focus {
        box-shadow: none;
    }

    &:disabled {
        pointer-events: initial;
        opacity: var(--pp-ui-btn-disabled-opacity);
        cursor: var(--pp-ui-btn-disabled-cursor);
    }

}
</style>
