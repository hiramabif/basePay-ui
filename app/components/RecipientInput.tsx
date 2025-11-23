"use client"; // DIRECTIVE: Client-side component.

import { useEffect, useState } from "react"; // HOOKS: React state and lifecycle.
import { isAddress } from "viem"; // LIB: Utility to validate Ethereum addresses.

/**
 * INTERFACE: Props passed from the parent (PaymentForm).
 * This component is a "Controlled Component" because it doesn't manage its own value state;
 * it receives values via props (address, amount) and notifies parent of changes via onChange.
 */
interface RecipientInputProps {
    id: string; // Unique ID for this row.
    address: string; // Current address value.
    amount: string; // Current amount value.
    // CALLBACK: Function to call when user types.
    onChange: (id: string, field: "address" | "amount", value: string) => void;
    // CALLBACK: Function to call when user clicks delete.
    onRemove: (id: string) => void;
    index?: number; // Position in the list (0-indexed).
    isLast?: boolean; // Is this the last item? (Useful for styling if needed).
}

export function RecipientInput({
    id,
    address,
    amount,
    onChange,
    onRemove,
}: RecipientInputProps) {
    // STATE: Local error message for address validation.
    // We keep this local because it's purely visual feedback for this specific input.
    const [addressError, setAddressError] = useState("");

    /**
     * EFFECT: Validate address whenever it changes.
     * We use `useEffect` here to react to prop changes.
     */
    useEffect(() => {
        // LOGIC: If there is an address AND it's invalid, show error.
        if (address && !isAddress(address)) {
            setAddressError("Invalid address");
        } else {
            setAddressError(""); // Clear error if valid or empty.
        }
    }, [address]); // DEPENDENCY: Run this effect only when 'address' changes.

    return (
        <div className="group relative animate-in slide-in-from-bottom-2 duration-300 fade-in">
            <div className="flex gap-2 items-start">
                {/* ADDRESS INPUT: Wider box (66%) */}
                <div className="flex-[2] bg-input/50 rounded-xl p-3 hover:bg-input transition-colors relative">
                    <input
                        type="text"
                        placeholder="0x..."
                        value={address}
                        onChange={(e) => onChange(id, "address", e.target.value)}
                        className={`w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/50 ${addressError ? "text-red-500" : ""}`}
                    />
                    {addressError && (
                        <span className="absolute -bottom-4 left-0 text-[10px] text-red-400">
                            {addressError}
                        </span>
                    )}
                </div>

                {/* AMOUNT INPUT: Narrower box (33%) */}
                <div className="flex-1 bg-input/50 rounded-xl p-3 hover:bg-input transition-colors flex items-center gap-2">
                    <input
                        type="number"
                        placeholder="0.0"
                        value={amount}
                        onChange={(e) => onChange(id, "amount", e.target.value)}
                        className="w-full bg-transparent text-sm text-right outline-none placeholder:text-muted-foreground/50"
                        min="0"
                        step="0.000001"
                    />
                </div>

                <button
                    onClick={() => onRemove(id)}
                    className="self-center p-2 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Remove recipient"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
