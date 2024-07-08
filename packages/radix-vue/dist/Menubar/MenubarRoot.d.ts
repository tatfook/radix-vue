import { Ref } from 'vue';
import { Direction } from '../shared/types';

export interface MenubarRootProps {
    /** The controlled value of the menu to open. Can be used as `v-model`. */
    modelValue?: string;
    /** The value of the menu that should be open when initially rendered. Use when you do not need to control the value state. */
    defaultValue?: string;
    /**
     * The reading direction of the combobox when applicable.
     *
     *  If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
     */
    dir?: Direction;
    /** When `true`, keyboard navigation will loop from last item to first, and vice versa. */
    loop?: boolean;
}
export type MenubarRootEmits = {
    /** Event handler called when the value changes. */
    'update:modelValue': [value: boolean];
};
export interface MenubarRootContext {
    modelValue: Ref<string>;
    dir: Ref<Direction>;
    loop: Ref<boolean>;
    onMenuOpen: (value: string) => void;
    onMenuClose: () => void;
    onMenuToggle: (value: string) => void;
}
export declare const injectMenubarRootContext: <T extends MenubarRootContext | null | undefined = MenubarRootContext>(fallback?: T | undefined) => T extends null ? MenubarRootContext | null : MenubarRootContext, provideMenubarRootContext: (contextValue: MenubarRootContext) => MenubarRootContext;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<MenubarRootProps>, {
    loop: boolean;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<MenubarRootProps>, {
    loop: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    loop: boolean;
}, {}>, Readonly<{
    default: (props: {
        /** Current input values */
        modelValue: string;
    }) => any;
}> & {
    default: (props: {
        /** Current input values */
        modelValue: string;
    }) => any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
